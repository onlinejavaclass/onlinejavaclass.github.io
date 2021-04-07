# Behavioural design patterns
## Observer pattern

Observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

```
The Observer pattern provides a way to subscribe and unsubscribe to and from these events for any object that implements a subscriber interface.
```


#### Usage examples: 

The Observer pattern is pretty common in Java code, especially in the GUI components. It provides a way to react to events happening in other objects without coupling to their classes.


Here are some examples of the pattern in core Java libraries:


```
java.util.Observer/java.util.Observable
All implementations of java.util.EventListener (practically all over Swing components)
javax.servlet.http.HttpSessionBindingListener
javax.servlet.http.HttpSessionAttributeListener
javax.faces.event.PhaseListener
```

#### Identification:
The pattern can be recognized by subscription methods, that store objects in a list and by calls to the update method issued to objects in that list.



#### Example


My Example is very Simple you have a Loan on which interest rate is subject to change and when it changes, Loan notifies to Newspaper or Internet media to display a new loan interest rate. 

To implement this we have a Subject interface that contains methods for adding, removing and notifying Observers and an Observer interface which contains ***update(int interest)*** method which will be called by the Subject implementation when the interest rate changes.


~
import java.util.ArrayList;

interface Observer {
       public void update(float interest);
}
~

~
interface Subject {
       public void registerObserver(Observer observer);

       public void removeObserver(Observer observer);

       public void notifyObservers();
}
~
~
import java.util.ArrayList;
class Loan implements Subject {
       private ArrayList<Observer> observers = new ArrayList<Observer>();
       private String type;
       private float interest;
       private String bank;

       public Loan(String type, float interest, String bank) {
              this.type = type;
              this.interest = interest;
              this.bank = bank;
       }

       public float getInterest() {
              return interest;
       }

       public void setInterest(float interest) {
              this.interest = interest;
              notifyObservers();
       }

       public String getBank() {
              return this.bank;
       }

       public String getType() {
              return this.type;
       }

       @Override
       public void registerObserver(Observer observer) {
              observers.add(observer);

       }

       @Override
       public void removeObserver(Observer observer) {
              observers.remove(observer);

       }

       @Override
       public void notifyObservers() {
              for (Observer ob : observers) {
                     System.out.println("Notifying Observers on change in Loan interest rate");
                     ob.update(this.interest);
              }

       }

}
~
~
class Newspaper implements Observer {
       @Override
       public void update(float interest) {
              System.out.println("Newspaper: Interest Rate updated, new Rate is: "
                           + interest);
       }
}
~
~
class Internet implements Observer {
       @Override
       public void update(float interest) {
              System.out.println("Internet: Interest Rate updated, new Rate is: "
                           + interest);
       }
}
~
~
public class ObserverTest {

    public static void main(String args[]) {
        // this will maintain all loans information
        Newspaper printMedia = new Newspaper();
        Internet onlineMedia = new Internet();

        Loan personalLoan = new Loan("Personal Loan", 12.5f,
                "Standard Charterd");
        personalLoan.registerObserver(printMedia);
        personalLoan.registerObserver(onlineMedia);
        personalLoan.setInterest(3.5f);

    }
}
~

#### After running the test the result is like below:


```
Notifying Observers on change in Loan interest rate
Newspaper: Interest Rate updated, new Rate is: 3.5
Notifying Observers on change in Loan interest rate
Internet: Interest Rate updated, new Rate is: 3.5
```
