# Behavioural design patterns
## Throttling pattern


Throttling pattern ensure that a given client is not able to access service resources more than the assigned limit.


```
Throttling pattern is used to rate-limit access to a resource.
```

#### Real world example

A large multinational corporation offers API to its customers. The API is rate-limited and each customer can only make certain amount of calls per second.


#### Programmatic Example

Tenant class presents the clients of the API. CallsCount tracks the number of API calls per tenant.


~
import java.security.InvalidParameterException;

public class Tenant {

  private final String name;
  private final int allowedCallsPerSecond;

  public Tenant(String name, int allowedCallsPerSecond, CallsCount callsCount) {
    if (allowedCallsPerSecond < 0) {
      throw new InvalidParameterException("Number of calls less than 0 not allowed");
    }
    this.name = name;
    this.allowedCallsPerSecond = allowedCallsPerSecond;
    callsCount.addTenant(name);
  }

  public String getName() {
    return name;
  }

  public int getAllowedCallsPerSecond() {
    return allowedCallsPerSecond;
  }
  
}
~


~
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public final class CallsCount {

    private final Map<String, AtomicLong> tenantCallsCount = new ConcurrentHashMap<>();

    public void addTenant(String tenantName) {
        tenantCallsCount.putIfAbsent(tenantName, new AtomicLong(0));
    }

    public void incrementCount(String tenantName) {
        tenantCallsCount.get(tenantName).incrementAndGet();
    }

    public long getCount(String tenantName) {
        return tenantCallsCount.get(tenantName).get();
    }

    public void reset() {
        System.out.println("Resetting the map.");
        tenantCallsCount.replaceAll((k, v) -> new AtomicLong(0));
    }
}
~

~
public interface Throttler {

  void start();
}
~


~
import java.util.TimerTask;

public class ThrottleTimerImpl implements Throttler {

  private final int throttlePeriod;
  private final CallsCount callsCount;

  public ThrottleTimerImpl(int throttlePeriod, CallsCount callsCount) {
    this.throttlePeriod = throttlePeriod;
    this.callsCount = callsCount;
  }

  @Override
  public void start() {
    new Timer(true).schedule(new TimerTask() {
      @Override
      public void run() {
        callsCount.reset();
      }
    }, 0, throttlePeriod);
  }
}

~
Next we introduce the service that the tenants are calling. To track the call count we use the throttler timer.

~
public class ThrottleTimerImpl implements Throttler {

  private final int throttlePeriod;
  private final CallsCount callsCount;

  public ThrottleTimerImpl(int throttlePeriod, CallsCount callsCount) {
    this.throttlePeriod = throttlePeriod;
    this.callsCount = callsCount;
  }

  @Override
  public void start() {
    new Timer(true).schedule(new TimerTask() {
      @Override
      public void run() {
        callsCount.reset();
      }
    }, 0, throttlePeriod);
  }
}
~


### Run

Now we are ready to see the full example in action. Tenant Adidas is rate-limited to 5 calls per second and Nike to 6.


~
import java.util.concurrent.ThreadLocalRandom;

class B2BService {

  private final CallsCount callsCount;

  public B2BService(Throttler timer, CallsCount callsCount) {
    this.callsCount = callsCount;
    timer.start();
  }

  public int dummyCustomerApi(Tenant tenant) {
    var tenantName = tenant.getName();
    var count = callsCount.getCount(tenantName);
    System.out.printf("Counter for %s : %s%n ", tenant.getName(), count);
    if (count >= tenant.getAllowedCallsPerSecond()) {
      System.out.printf("API access per second limit reached for: %s%n", tenantName);
      return -1;
    }
    callsCount.incrementCount(tenantName);
    return getRandomCustomerId();
  }

  private int getRandomCustomerId() {
    return ThreadLocalRandom.current().nextInt(1, 10000);
  }
}
~

#### Result would be like below:


```
Resetting the map.
Resetting the map.
Counter for Adidas : 0
 Resetting the map.
Resetting the map.
Resetting the map.
Counter for Nike : 0
 Resetting the map.
Counter for Nike : 0
 Counter for Adidas : 0
 Counter for Nike : 1
 Counter for Adidas : 1
 Counter for Nike : 2
 Counter for Adidas : 2
 Counter for Nike : 3
 Counter for Adidas : 3
 Counter for Nike : 4
 Counter for Adidas : 4
 Counter for Nike : 5
 Counter for Adidas : 5
 API access per second limit reached for: Adidas
Counter for Nike : 6
 API access per second limit reached for: Nike
Resetting the map.
Resetting the map.
Counter for Adidas : 5
 API access per second limit reached for: Adidas
Counter for Nike : 0
 Counter for Adidas : 0
 Counter for Nike : 1
 Counter for Adidas : 1
 Counter for Nike : 2
 Counter for Adidas : 2
 Counter for Nike : 3
 Counter for Adidas : 3
 Counter for Nike : 4
 Counter for Adidas : 4
 Counter for Nike : 5
 Counter for Adidas : 5
 API access per second limit reached for: Adidas
Counter for Nike : 6
 API access per second limit reached for: Nike
Resetting the map.
Counter for Adidas : 0
 Counter for Nike : 0
 Resetting the map.
Counter for Adidas : 0
 Counter for Nike : 0
 Counter for Adidas : 1
 Counter for Nike : 1
 Counter for Adidas : 2
 Counter for Nike : 2
 Counter for Adidas : 3
 Counter for Nike : 3
 Counter for Adidas : 4
 Resetting the map.

```
