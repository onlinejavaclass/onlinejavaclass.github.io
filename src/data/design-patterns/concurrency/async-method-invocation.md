# Concurrency design patterns
## Async Method Invocation pattern

Asynchronous method invocation is pattern where the calling thread is not blocked while waiting results of tasks.

```
The pattern provides parallel processing of multiple independent tasks and retrieving the results via callbacks or waiting until everything is done.
```

![with_strategy](data/design-patterns/concurrency/assets/async-method-invocation.png)

#### Use async method invocation pattern when

+ you have multiple independent tasks that can run in parallel
+ you need to improve the performance of a group of sequential tasks
+ you have limited amount of processing capacity or long running tasks and the caller should not wait the tasks to be ready



~
public interface AsyncCallback<T> {

    void onComplete(T value, Optional<Exception> ex);
}
~


~
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;

public interface AsyncExecutor {

    public  <T>  AsyncResult<T> startProcess(Callable<T> callable);

    public <T> AsyncResult<T> startProcess(Callable<T> callable, AsyncCallback<T> ac);

    public <T> T endProcess(AsyncResult<T> asyncResult) throws ExecutionException, InterruptedException;

}
~

~
import java.util.concurrent.ExecutionException;

public interface AsyncResult<T> {
    public boolean isCompleted();

    public T getValue() throws ExecutionException;

    public void await() throws InterruptedException;
}
~

~
import java.util.Optional;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.atomic.AtomicInteger;

public class ThreadAsyncExecutor implements AsyncExecutor {

    private final AtomicInteger idx = new AtomicInteger(0);

    @Override
    public <T> AsyncResult<T> startProcess(Callable<T> task) {
        return startProcess(task, null);
    }

    @Override
    public <T> AsyncResult<T> startProcess(Callable<T> task, AsyncCallback<T> ac) {
        var result = new CompletableResult<>(ac);
        new Thread(() -> {
            try {
                result.setValue(task.call());
            } catch (Exception ex) {
                result.setException(ex);
            }
        }, "executor-" + idx.incrementAndGet()).start();
        return result;
    }

    @Override
    public <T> T endProcess(AsyncResult<T> asyncResult) throws ExecutionException,
            InterruptedException {
        if (!asyncResult.isCompleted()) {
            asyncResult.await();
        }
        return asyncResult.getValue();
    }

    public static class CompletableResult<T> implements AsyncResult<T> {
        public final int RUNNING = 0;
        public final int FAILED = 1;
        public final int COMPLETED = 2;

        private final Object lock;

        private final Optional<AsyncCallback<T>> callback;

        private volatile int state;

        private T value;

        private Exception exception;

        public CompletableResult(AsyncCallback<T> callback) {
            this.lock = new Object();
            this.callback = Optional.ofNullable(callback);
        }

        public void setValue(T value) {
            this.value = value;
            this.state = COMPLETED;
            this.callback.ifPresent(ac -> ac.onComplete(value, Optional.empty()));
            synchronized (lock) {
                lock.notifyAll();
            }
        }

        public void setException(Exception exception) {
            this.exception = exception;
            this.state = FAILED;
            this.callback.ifPresent(ac -> ac.onComplete(null, Optional.of(exception)));
            synchronized (lock) {
                lock.notifyAll();
            }
        }

        @Override
        public boolean isCompleted() {
            return state > RUNNING;
        }

        @Override
        public T getValue() throws ExecutionException {
            if (state == COMPLETED) {
                return value;
            } else if (state == FAILED) {
                throw new ExecutionException(exception);
            } else {
                throw new IllegalStateException("Execution not completed yet");
            }
        }

        @Override
        public void await() throws InterruptedException {
            synchronized (lock) {
                while (!isCompleted()) {
                    lock.wait();
                }
            }
        }
    }

}
~

#### Result : Could be running in different time for you


```
task completed with 40
name=Callback result 1, value=40
task completed with 20
task completed with 30
task completed with 50
name=Callback result 2, value=50
task completed with 10
task finished with 10
task finished with 20
task finished with 30
```
