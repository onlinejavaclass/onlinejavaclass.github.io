# Concurrency design patterns
## Saga pattern

This pattern is used in distributed services to perform a group of operations atomically. This is an analog of transaction in a database but in terms of microservices architecture this is executed in a distributed environment.

```
A saga is a sequence of local transactions in a certain context. If one transaction fails for some reason, the saga executes compensating transactions(rollbacks) to undo the impact of the preceding transactions. There are two types of Saga:
```

+ Choreography-Based Saga. In this approach, there is no central orchestrator. Each service participating in the Saga performs their transaction and publish events. The other services act upon those events and perform their transactions. Also, they may or not publish other events based on the situation.

* Orchestration-Based Saga In this approach, there is a Saga orchestrator that manages all the transactions and directs the participant services to execute local transactions based on events. This orchestrator can also be though of as a Saga Manager.


![saga](data/design-patterns/concurrency/assets/saga.png)

```
The major difference with choreography saga is an ability to handle crashed services
(otherwise in choreography services very hard to prevent a saga if one of them has been crashed)
```

#### Usage:

Use the Saga pattern, if:

* you need to perform a group of operations related to different microservices atomically
* you need to rollback changes in different places in case of failure one of the operation
* you need to take care of data consistency in different places including different databases
* you can not use 2PC(two phase commit)

#### Example:

In this article we'll cover an example for a booking hotel and flight store running on different services -microservices- 
Then we apply two methods for the same project. 

##### Choreography-Based Saga

In this approach, there is no central orchestrator. Each service participating in the Saga performs their transaction and publish events. 
The other services act upon those events and perform their transactions. Also, they may or not publish other events based on the situation.

#### Saga representation

**Saga** consists of chapters. Every **ChoreographyChapter** is executed a certain service.

Inner class ***Chapter*** Class presents a chapter status and incoming parameters(incoming parameter transforms to outcoming parameter)


~
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Saga {

  private final List<Chapter> chapters;
  private int pos;
  private boolean forward;
  private boolean finished;


  public static Saga create() {
    return new Saga();
  }

  public SagaResult getResult() {
    if (finished) {
      return forward
          ? SagaResult.FINISHED
          : SagaResult.ROLLBACKED;
    }

    return SagaResult.PROGRESS;
  }

  public Saga chapter(String name) {
    this.chapters.add(new Chapter(name));
    return this;
  }

  public Saga setInValue(Object value) {
    if (chapters.isEmpty()) {
      return this;
    }
    chapters.get(chapters.size() - 1).setInValue(value);
    return this;
  }

  public Object getCurrentValue() {
    return chapters.get(pos).getInValue();
  }

  public void setCurrentValue(Object value) {
    chapters.get(pos).setInValue(value);
  }

  public void setCurrentStatus(ChapterResult result) {
    chapters.get(pos).setResult(result);
  }

  void setFinished(boolean finished) {
    this.finished = finished;
  }

  boolean isForward() {
    return forward;
  }

  int forward() {
    return ++pos;
  }

  int back() {
    this.forward = false;
    return --pos;
  }

  private Saga() {
    this.chapters = new ArrayList<>();
    this.pos = 0;
    this.forward = true;
    this.finished = false;
  }

  Chapter getCurrent() {
    return chapters.get(pos);
  }


  boolean isPresent() {
    return pos >= 0 && pos < chapters.size();
  }

  boolean isCurrentSuccess() {
    return chapters.get(pos).isSuccess();
  }

  public static class Chapter {
    private final String name;
    private ChapterResult result;
    private Object inValue;


    public Chapter(String name) {
      this.name = name;
      this.result = ChapterResult.INIT;
    }

    public Object getInValue() {
      return inValue;
    }

    public void setInValue(Object object) {
      this.inValue = object;
    }

    public String getName() {
      return name;
    }

    public void setResult(ChapterResult result) {
      this.result = result;
    }

    public boolean isSuccess() {
      return result == ChapterResult.SUCCESS;
    }
  }

  public enum ChapterResult {
    INIT, SUCCESS, ROLLBACK
  }

  public enum SagaResult {
    PROGRESS, FINISHED, ROLLBACKED
  }

  @Override
  public String toString() {
    return "Saga{"
        + "chapters="
        + Arrays.toString(chapters.toArray())
        + ", pos="
        + pos
        + ", forward="
        + forward
        + '}';
  }
}
~

We need a **ChoreographyChapter** as an interface representing a contract for an external service. 
In this case, a service needs to make a decision what to do further hence the server needs to get all context representing **Saga**

~
public interface ChoreographyChapter {

  /**
   * In that case, every method is responsible to make a decision on what to do then.
   *
   * @param saga incoming saga
   * @return saga result
   */
  Saga execute(Saga saga);

  /**
   * get name method.
   *
   * @return service name.
   */
  String getName();

  /**
   * The operation executed in general case.
   *
   * @param saga incoming saga
   * @return result {@link Saga}
   */
  Saga process(Saga saga);

  /**
   * The operation executed in rollback case.
   *
   * @param saga incoming saga
   * @return result {@link Saga}
   */
  Saga rollback(Saga saga);

}

~

We write another class for representing a service discovery pattern. (Remember services are distributed? )

~
public class ServiceDiscoveryService {
  private final Map<String, ChoreographyChapter> services;

  /**
   * find any service.
   *
   * @return any service
   * @throws NoSuchElementException if no elements further
   */
  public ChoreographyChapter findAny() {
    return services.values().iterator().next();
  }

  public Optional<ChoreographyChapter> find(String service) {
    return Optional.ofNullable(services.getOrDefault(service, null));
  }

  public ServiceDiscoveryService discover(ChoreographyChapter chapterService) {
    services.put(chapterService.getName(), chapterService);
    return this;
  }

  public ServiceDiscoveryService() {
    this.services = new HashMap<>();
  }


}
~


Then we implement a general contract abstract **Service** class which representing services.  

~
public abstract class Service implements ChoreographyChapter {

  private final ServiceDiscoveryService sd;

  public Service(ServiceDiscoveryService service) {
    this.sd = service;
  }

  @Override
  public com.metao.dp.saga.choreography.Saga execute(com.metao.dp.saga.choreography.Saga saga) {
    var nextSaga = saga;
    Object nextVal;
    var chapterName = saga.getCurrent().getName();
    if (chapterName.equals(getName())) {
      if (saga.isForward()) {
        nextSaga = process(saga);
        nextVal = nextSaga.getCurrentValue();
        if (nextSaga.isCurrentSuccess()) {
          nextSaga.forward();
        } else {
          nextSaga.back();
        }
      } else {
        nextSaga = rollback(saga);
        nextVal = nextSaga.getCurrentValue();
        nextSaga.back();
      }

      if (isSagaFinished(nextSaga)) {
        return nextSaga;
      }

      nextSaga.setCurrentValue(nextVal);
    }
    var finalNextSaga = nextSaga;

    return sd.find(chapterName).map(ch -> ch.execute(finalNextSaga))
            .orElseThrow(serviceNotFoundException(chapterName));
  }

  private Supplier<RuntimeException> serviceNotFoundException(String chServiceName) {
    return () -> new RuntimeException(
            String.format("the service %s has not been found", chServiceName));
  }

  @Override
  public com.metao.dp.saga.choreography.Saga process(com.metao.dp.saga.choreography.Saga saga) {
    var inValue = saga.getCurrentValue();
    System.out.printf("The chapter '%s' has been started. "
                    + "The data %s has been stored or calculated successfully",
            getName(), inValue);
    saga.setCurrentStatus(com.metao.dp.saga.choreography.Saga.ChapterResult.SUCCESS);
    saga.setCurrentValue(inValue);
    return saga;
  }

  @Override
  public com.metao.dp.saga.choreography.Saga rollback(com.metao.dp.saga.choreography.Saga saga) {
    var inValue = saga.getCurrentValue();
    System.out.printf("The Rollback for a chapter '%s' has been started. "
                    + "The data %s has been rollbacked successfully%n",
            getName(), inValue);

    saga.setCurrentStatus(com.metao.dp.saga.choreography.Saga.ChapterResult.ROLLBACK);
    saga.setCurrentValue(inValue);
    return saga;
  }

  private boolean isSagaFinished(com.metao.dp.saga.choreography.Saga saga) {
    if (!saga.isPresent()) {
      saga.setFinished(true);
      System.out.printf("The saga has been finished with %s status", saga.getResult());
      return true;
    }
    return false;
  }

}
~

OrderService Class representing a service to init a new order.

~
public class OrderService extends Service {

  public OrderService(ServiceDiscoveryService service) {
    super(service);
  }

  @Override
  public String getName() {
    return "init an order";
  }
}
~

**WithdrawMoneyService** Class representing a service to withdraw a money and rolling back.

~
public class WithdrawMoneyService extends Service {

  public WithdrawMoneyService(ServiceDiscoveryService service) {
    super(service);
  }

  @Override
  public String getName() {
    return "withdrawing Money";
  }

  @Override
  public Saga process(Saga saga) {
    var inValue = saga.getCurrentValue();

    if (inValue.equals("bad_order")) {
      System.out.printf("The chapter '%s', val '%s' has been started. But the exception has been raised."
              + "The rollback is about to start", getName(), inValue);
      saga.setCurrentStatus(Saga.ChapterResult.ROLLBACK);
      return saga;
    }
    return super.process(saga);
  }
}   
~

**HotelBookingService** Class representing a service to book a hotel.

~
public class HotelBookingService extends Service {
  public HotelBookingService(ServiceDiscoveryService service) {
    super(service);
  }

  @Override
  public String getName() {
    return "booking a Hotel";
  }


}
~


**FlyBookingService** Class representing a service to book a fly.

~
public class FlyBookingService extends Service {
  public FlyBookingService(ServiceDiscoveryService service) {
    super(service);
  }

  @Override
  public String getName() {
    return "booking a Fly";
  }
}
~

#### Demo

~
public class SagaApplication {

  /**
   * main method.
   */
  public static void main(String[] args) {
    var sd = serviceDiscovery();
    var service = sd.findAny();
    var goodOrderSaga = service.execute(newSaga("good_order"));
    var badOrderSaga = service.execute(newSaga("bad_order"));
    System.out.printf("orders: goodOrder is %s, badOrder is %s",
            goodOrderSaga.getResult(), badOrderSaga.getResult());
  }


  private static Saga newSaga(Object value) {
    return Saga
            .create()
            .chapter("init an order").setInValue(value)
            .chapter("booking a Fly")
            .chapter("booking a Hotel")
            .chapter("withdrawing Money");
  }

  private static ServiceDiscoveryService serviceDiscovery() {
    var sd = new ServiceDiscoveryService();
    return sd
            .discover(new OrderService(sd))
            .discover(new FlyBookingService(sd))
            .discover(new HotelBookingService(sd))
            .discover(new WithdrawMoneyService(sd));
  }
}
~


#Output would be like below

```
The chapter 'init an order' has been started. The data good_order has been stored or calculated successfully.
The chapter 'booking a Fly' has been started. The data good_order has been stored or calculated successfully.
The chapter 'booking a Hotel' has been started. The data good_order has been stored or calculated successfully.
The chapter 'withdrawing Money' has been started. The data good_order has been stored or calculated successfully.
The saga has been finished with FINISHED statusThe chapter 'init an order' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'booking a Fly' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'booking a Hotel' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'withdrawing Money', val 'bad_order' has been started. But the exception has been raised.The rollback is about to start
The Rollback for a chapter 'booking a Hotel' has been started. The data bad_order has been rollbacked successfully
The Rollback for a chapter 'booking a Fly' has been started. The data bad_order has been rollbacked successfully
The Rollback for a chapter 'init an order' has been started. The data bad_order has been rollbacked successfully
The saga has been finished with ROLLBACKED statusorders: goodOrder is FINISHED, badOrder is ROLLBACKED
```

##### Orchestration-Based Saga

In this approach, there is an orchestrator  (see **SagaOrchestrator**) that manages all the transactions and directs the participant services to execute local transactions based on events. 
The major difference with choreography saga is an ability to handle crashed services (otherwise in choreography services very hard to prevent a saga if one of them has been crashed)


####  * Saga representation. 
Saga consists of chapters. Every **ChoreographyChapter** is executed by a certain service.

~
import java.util.ArrayList;
import java.util.List;

public class Saga {

  private final List<Chapter> chapters;


  private Saga() {
    this.chapters = new ArrayList<>();
  }


  public Saga chapter(String name) {
    this.chapters.add(new Chapter(name));
    return this;
  }


  public Chapter get(int idx) {
    return chapters.get(idx);
  }

  public boolean isPresent(int idx) {
    return idx >= 0 && idx < chapters.size();
  }


  public static Saga create() {
    return new Saga();
  }

  /**
   * result for saga.
   */
  public enum Result {
    FINISHED, ROLLBACK, CRASHED
  }

  /**
   * class represents chapter name.
   */
  public static class Chapter {
    String name;

    public Chapter(String name) {
      this.name = name;
    }

    public String getName() {
      return name;
    }
  }
}

~

#### OrchestrationChapter 
is an interface representing a contract for an external service.


~
public interface OrchestrationChapter<K> {

  /**
   * method get name.
   *
   * @return service name.
   */
  String getName();

  /**
   * The operation executed in general case.
   *
   * @param value incoming value
   * @return result {@link ChapterResult}
   */
  ChapterResult<K> process(K value);

  /**
   * The operation executed in rollback case.
   *
   * @param value incoming value
   * @return result {@link ChapterResult}
   */
  ChapterResult<K> rollback(K value);
}
~

#### Executing result for chapter.

~
public class ChapterResult<K> {
  private final K value;
  private final State state;

  public K getValue() {
    return value;
  }

  ChapterResult(K value, State state) {
    this.value = value;
    this.state = state;
  }

  public boolean isSuccess() {
    return state == State.SUCCESS;
  }

  public static <K> ChapterResult<K> success(K val) {
    return new ChapterResult<>(val, State.SUCCESS);
  }

  public static <K> ChapterResult<K> failure(K val) {
    return new ChapterResult<>(val, State.FAILURE);
  }

  /**
   * state for chapter.
   */
  public enum State {
    SUCCESS, FAILURE
  }
}
~


#### Flight booking service

~
public class FlyBookingService extends Service<String> {
  @Override
  public String getName() {
    return "booking a Fly";
  }
}
~

#### Hotel booking service

~
public class HotelBookingService extends Service<String> {

  @Override
  public String getName() {
    return "booking a Hotel";
  }


  @Override
  public ChapterResult<String> rollback(String value) {
    if (value.equals("crashed_order")) {
      System.out.printf("The Rollback for a chapter '%s' has been started. "
              + "The data %s has been failed.The saga has been crashed.%n",
          getName(), value);

      return ChapterResult.failure(value);
    }

    System.out.printf("The Rollback for a chapter '%s' has been started. "
            + "The data '%s' has been rollbacked successfully.%n",
        getName(), value);

    return super.rollback(value);
  }
}
~

#### Order Service


~
public class OrderService extends Service<String> {
  @Override
  public String getName() {
    return "init an order";
  }
}
~

#### Saga: Saga consists of chapters. 
Every **OrchestrationChapter** is executed by a certain service.


~
import java.util.ArrayList;
import java.util.List;

public class Saga {

  private final List<Chapter> chapters;


  private Saga() {
    this.chapters = new ArrayList<>();
  }


  public Saga chapter(String name) {
    this.chapters.add(new Chapter(name));
    return this;
  }


  public Chapter get(int idx) {
    return chapters.get(idx);
  }

  public boolean isPresent(int idx) {
    return idx >= 0 && idx < chapters.size();
  }


  public static Saga create() {
    return new Saga();
  }

  /**
   * result for saga.
   */
  public enum Result {
    FINISHED, ROLLBACK, CRASHED
  }

  /**
   * class represents chapter name.
   */
  public static class Chapter {
    String name;

    public Chapter(String name) {
      this.name = name;
    }

    public String getName() {
      return name;
    }
  }
}
~


#### Saga Orchestration: The heart of all controlling and monitoring & transactionss

~
import com.metao.dp.saga.orchestration.Saga.Result;

import static com.metao.dp.saga.orchestration.Saga.Result.*;

public class SagaOrchestrator {
  private final Saga saga;
  private final ServiceDiscoveryService sd;
  private final CurrentState state;


  /**
   * Create a new service to orchetrate sagas.
   *
   * @param saga saga to process
   * @param sd   service discovery @see {@link ServiceDiscoveryService}
   */
  public SagaOrchestrator(Saga saga, ServiceDiscoveryService sd) {
    this.saga = saga;
    this.sd = sd;
    this.state = new CurrentState();
  }

  /**
   * pipeline to execute saga process/story.
   *
   * @param value incoming value
   * @param <K>   type for incoming value
   * @return result @see {@link Result}
   */
  public <K> Result execute(K value) {
    state.cleanUp();
    System.out.println(" The new saga is about to start");
    var result = FINISHED;
    K tempVal = value;

    while (true) {
      var next = state.current();
      var ch = saga.get(next);
      var srvOpt = sd.find(ch.name);

      if (srvOpt.isEmpty()) {
        state.directionToBack();
        state.back();
        continue;
      }

      var srv = srvOpt.get();

      if (state.isForward()) {
        var processRes = srv.process(tempVal);
        if (processRes.isSuccess()) {
          next = state.forward();
          tempVal = (K) processRes.getValue();
        } else {
          state.directionToBack();
        }
      } else {
        var rlRes = srv.rollback(tempVal);
        if (rlRes.isSuccess()) {
          next = state.back();
          tempVal = (K) rlRes.getValue();
        } else {
          result = CRASHED;
          next = state.back();
        }
      }


      if (!saga.isPresent(next)) {
        return state.isForward() ? FINISHED : result == CRASHED ? CRASHED : ROLLBACK;
      }
    }

  }


  private static class CurrentState {
    int currentNumber;
    boolean isForward;

    void cleanUp() {
      currentNumber = 0;
      isForward = true;
    }

    CurrentState() {
      this.currentNumber = 0;
      this.isForward = true;
    }


    boolean isForward() {
      return isForward;
    }

    void directionToBack() {
      isForward = false;
    }

    int forward() {
      return ++currentNumber;
    }

    int back() {
      return --currentNumber;
    }

    int current() {
      return currentNumber;
    }
  }

}
~

#### Service:  

Common abstraction class representing services. 
Implementing a general contract (see  **OrchestrationChapter** )

~
public abstract class Service<K> implements OrchestrationChapter<K> {

  @Override
  public abstract String getName();


  @Override
  public ChapterResult<K> process(K value) {
    System.out.printf("The chapter '%s' has been started. "
            + "The data %s has been stored or calculated successfully.%n", getName(), value);
    return ChapterResult.success(value);
  }

  @Override
  public ChapterResult<K> rollback(K value) {
    System.out.printf("The Rollback for a chapter '%s' has been started. "
                    + "The data '%s' has been rollbacked successfully.%n",
            getName(), value);
    return ChapterResult.success(value);
  }


}

~

#### ServiceDiscoveryService:
The class representing a service discovery pattern.

~
public class ServiceDiscoveryService {
  private final Map<String, OrchestrationChapter<?>> services;

  public Optional<OrchestrationChapter> find(String service) {
    return Optional.ofNullable(services.getOrDefault(service, null));
  }

  public ServiceDiscoveryService discover(OrchestrationChapter<?> orchestrationChapterService) {
    services.put(orchestrationChapterService.getName(), orchestrationChapterService);
    return this;
  }

  public ServiceDiscoveryService() {
    this.services = new HashMap<>();
  }

}

~

#### Withdraw money service: 

Class representing a service to withdraw a money.

~
public class WithdrawMoneyService extends Service<String> {
  @Override
  public String getName() {
    return "withdrawing Money";
  }

  @Override
  public ChapterResult<String> process(String value) {
    if (value.equals("bad_order") || value.equals("crashed_order")) {
      System.out.printf("The chapter '%s', val: '%s' has been started. But the exception has been raised."
              + "The rollback is about to start", getName(), value);
      return ChapterResult.failure(value);
    }
    return super.process(value);
  }
}

~


### Result:

```
 The new saga is about to start
The chapter 'init an order' has been started. The data good_order has been stored or calculated successfully.
The chapter 'booking a Fly' has been started. The data good_order has been stored or calculated successfully.
The chapter 'booking a Hotel' has been started. The data good_order has been stored or calculated successfully.
The chapter 'withdrawing Money' has been started. The data good_order has been stored or calculated successfully.
 The new saga is about to start
The chapter 'init an order' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'booking a Fly' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'booking a Hotel' has been started. The data bad_order has been stored or calculated successfully.
The chapter 'withdrawing Money', val: 'bad_order' has been started. But the exception has been raised.The rollback is about to startThe Rollback for a chapter 'withdrawing Money' has been started. The data 'bad_order' has been rollbacked successfully.
The Rollback for a chapter 'booking a Hotel' has been started. The data 'bad_order' has been rollbacked successfully.
The Rollback for a chapter 'booking a Hotel' has been started. The data 'bad_order' has been rollbacked successfully.
The Rollback for a chapter 'booking a Fly' has been started. The data 'bad_order' has been rollbacked successfully.
The Rollback for a chapter 'init an order' has been started. The data 'bad_order' has been rollbacked successfully.
 The new saga is about to start
The chapter 'init an order' has been started. The data crashed_order has been stored or calculated successfully.
The chapter 'booking a Fly' has been started. The data crashed_order has been stored or calculated successfully.
The chapter 'booking a Hotel' has been started. The data crashed_order has been stored or calculated successfully.
The chapter 'withdrawing Money', val: 'crashed_order' has been started. But the exception has been raised.The rollback is about to startThe Rollback for a chapter 'withdrawing Money' has been started. The data 'crashed_order' has been rollbacked successfully.
The Rollback for a chapter 'booking a Hotel' has been started. The data crashed_order has been failed.The saga has been crashed.
The Rollback for a chapter 'booking a Fly' has been started. The data 'crashed_order' has been rollbacked successfully.
The Rollback for a chapter 'init an order' has been started. The data 'crashed_order' has been rollbacked successfully.
orders: goodOrder is FINISHED, badOrder is ROLLBACK,crashedOrder is CRASHED
```
