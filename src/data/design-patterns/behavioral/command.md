# Behavioural design patterns
## Command pattern

Command is behavioral design pattern that converts requests or simple operations into objects.

```
The conversion allows deferred or remote execution of commands, storing command history, etc.
```

#### Usage examples: 
The Command pattern is pretty common in Java code. Most often it’s used as an alternative for callbacks to parameterizing UI elements with actions. 
It’s also used for queueing tasks, tracking operations history, etc

Here are some examples of Commands in core Java libraries:

```
All implementations of java.lang.Runnable

All implementations of javax.swing.Action
```

#### Text editor commands and undo

Note: The system needs to support the undo (Undo) operation and the redo operation of the command. You can also consider using the command mode.

We first create the Order interface as the command , and then create the Stock class as the request . The entity command classes **BuyStock** and **SellStock** implement the **Order** interface and will execute the actual command processing. 
Create the class **Broker** as the calling object , which accepts orders and can place orders.

The **Broker** object uses the command mode to determine which object executes which command based on the type of command. **CommandPatternDemo** , our demo class uses the **Broker** class to demonstrate the command pattern.



#### Create a command interface.
 
~
public interface Order {
    void execute();
}   
~

#### Create a request class.

~
public class Stock { 
    private String name = " ABC " ;
    private int quantity = 10 ;

    public void buy() {
        System.out.println( " Stock [Name: " + name + " , Quantity: " + quantity + " ] bought " ) ;
    }
    public void sell() {
        System.out.println( " Stock [Name: " + name + " , Quantity: " + quantity + " ] sold " ) ;
    } 
}
~

#### Create an entity class that implements the Order interface.

~
public class BuyStock implements Order { 
    private Stock abcStock ;
 
    public BuyStock(Stock abcStock) {
        this.abcStock = abcStock;
    } 
    public void execute () {
        abcStock.buy();
    }
}  
~

#### Sell stock

~
public class SellStock implements Order { 
    private Stock abcStock;

    public SellStock(Stock abcStock) {
        this.abcStock = abcStock;
    } 
    public void execute() {
        abcStock.sell();
    } 
}     
~

#### Create a command call class.

~
import java.util.ArrayList;
import java.util.List;
 
public class Broker {
   private List<Order> orderList = new ArrayList<Order>(); 
 
   public void takeOrder(Order order){
      orderList.add(order);      
   }
 
   public void placeOrders(){
      for (Order order : orderList) {
         order.execute();
      }
      orderList.clear();
   }
}
~

#### Use the Broker class to accept and execute commands.

~
public class CommandPatternDemo {
   public static void main(String[] args) {
      Stock abcStock = new Stock();
 
      BuyStock buyStockOrder = new BuyStock(abcStock);
      SellStock sellStockOrder = new SellStock(abcStock);
 
      Broker broker = new Broker();
      broker.takeOrder(buyStockOrder);
      broker.takeOrder(sellStockOrder);
 
      broker.placeOrders();
   }
}
~

#### Execute the program and output the result:

```
Stock [ Name: ABC, Quantity: 10 ] bought
Stock [ Name: ABC, Quantity: 10 ] sold
```
