# Idioms
## Lazy Loading


Lazy loading is a design pattern commonly used to defer initialization of an object until the point at which it is needed.


    It can contribute to efficiency in the program's operation if properly and appropriately used.


![lazy_loading](data/design-patterns/idiom/assets/lazy-loading.png)

### Use the Lazy Loading idiom when

Eager loading is expensive or the object to be loaded might not be needed at all


#### Real world examples

    JPA annotations @OneToOne, @OneToMany, @ManyToOne, @ManyToMany and fetch = FetchType.LAZY


#### Example

We define a class that simulate like a object that is expensive to create


~
public class Heavy {

  public Heavy() {
    System.out.println("Creating Heavy ...");
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      System.err.printf("Exception caught. %s.%n", e);
    }
    System.out.println("... Heavy created");
  }
}
~

Simple implementation of the lazy loading idiom. However, this is not thread safe.

~
public class HolderNaive {

    private Heavy heavy;

    public HolderNaive() {
        System.out.println("HolderNaive created");
    }

    /**
     * Get heavy object.
     */
    public Heavy getHeavy() {
        if (heavy == null) {
            heavy = new Heavy();
        }
        return heavy;
    }
}
~

Same as HolderNaive but with added synchronization. 
This implementation is thread safe, but each **getHeavy()** call costs additional synchronization overhead.


~
public class HolderThreadSafe {

  private Heavy heavy;

  public HolderThreadSafe() {
        System.out.println("HolderThreadSafe created");
  }

  /**
   * Get heavy object.
   */
  public synchronized Heavy getHeavy() {
    if (heavy == null) {
      heavy = new Heavy();
    }
    return heavy;
  }
}
~

#### Solution?

This lazy loader is thread safe and more efficient than **HolderThreadSafe**. 
It utilizes Java 8 functional interface **Supplier** as **Heavy** factory.


~
import java.util.function.Supplier;

public class Java8Holder {

    private Supplier<Heavy> heavy = this::createAndCacheHeavy;

    public Java8Holder() {
        System.out.println("Java8Holder created");
    }

    public Heavy getHeavy() {
        return heavy.get();
    }

    private synchronized Heavy createAndCacheHeavy() {
        class HeavyFactory implements Supplier<Heavy> {
            private final Heavy heavyInstance = new Heavy();

            @Override
            public Heavy get() {
                return heavyInstance;
            }
        }

        if (!(heavy instanceof HeavyFactory)) {
            heavy = new HeavyFactory();
        }

        return heavy.get();
    }
}
~

We used the ``supplier`` which is supplying the object on ``get()`` method when is getting called. Note that 
this call happens in runtime and the ```get``` method is a synchronous, so it's a blocky. Means this call
would block the current thread until the object is provided and returned. Note that this just demonstrates
how objects could be provided in runtime not to provide then asynchronously.

If you want to provide the object in a non-blocky fashion then combine this with ```Runnable``` and ``CompletableFuture``
I'll cover this in another course.

#### Demo of usage


~
public class App {

  public static void main(String[] args) {

    // Simple lazy loader - not thread safe
    var holderNaive = new HolderNaive();
    var heavy = holderNaive.getHeavy();
    System.out.printf("heavy=%s.%n", heavy);

    // Thread safe lazy loader, but with heavy synchronization on each access
    var holderThreadSafe = new HolderThreadSafe();
    var another = holderThreadSafe.getHeavy();
    System.out.printf("another=%s.%n", another);

    // The most efficient lazy loader utilizing Java 8 features
    var java8Holder = new Java8Holder();
    var next = java8Holder.getHeavy();
    System.out.printf("next=%s.%n", next);
  }
}
~


### Result is here:

    HolderNaive created
    Creating Heavy ...
    ... Heavy created
    heavy=com.metao.dp.lazyloading.Heavy@6e3c1e69.
    HolderThreadSafe created
    Creating Heavy ...
    ... Heavy created
    another=com.metao.dp.lazyloading.Heavy@35851384.
    Java8Holder created
    Creating Heavy ...
    ... Heavy created
    next=com.metao.dp.lazyloading.Heavy@28f67ac7.
    
    BUILD SUCCESSFUL in 3s
    3 actionable tasks: 2 executed, 1 up-to-date
    13:13:45: Task execution finished 'App.main()'.



