# Behavioural design patterns
## Strategy pattern

Strategy pattern defines family of algorithms which are encapsulated and are interchangeable at run time depending on a factor that requires a particular algorithm to be executed. Strategy pattern encourages open-close design principle where a class is open for extension but closed for modification.
It is a suitable replacement for a if-else or switch-case statements or complex conditional logic within a method. It also leads to more testable code, especially when coupled with IOC.

#### When to use: 
Let us assume that you are a Telecom service provider and you provide prepaid recharge facility to the customer. Depending on the recharge amount you would like to provide free SMS and free Talk time offer.
The Telecom service system can have a **TelecomOperator** class. 
On each recharge this class has to determine different offer depending on the recharge amount.

![without_strategy](data/archive/design-patterns/behavioral/assets/withoutStrategy.png)

#### So This class ma look like this.

~
public class TelecomOperator {
    public int getFreeSMS(int amount) {
        int freeSMS = 0;
        if (amount == 250) {
            freeSMS = 25;
        } else if (amount == 500) {
            freeSMS = 50;
        }
        return freeSMS;
    }

    public int getFreeMinute(int amount) {
        int freeMinute = 0;
        if (amount == 250) {
            freeMinute = 20;
        } else if (amount == 500) {
            freeMinute = 60;
        }
        return freeMinute;
    }
}
~

To use the above operator a Telecom Client can be written as following, On each recharge this class will determine the free SMS and Free Talk time offer. 


~
public class TelecomClient {
    private static final TelecomOperator operator = new TelecomOperator();

    public static void main(String[] args) {
        int freeSMS = 0;
        int freeMinute = 0;
        //On Rs. 250 recharge get the free SMS and Free Talk time offer.
        freeSMS = operator.getFreeSMS(250);
        freeMinute = operator.getFreeMinute(250);
        System.out.println("You have " + freeSMS + "  SMS and " + freeMinute + " Minute free talk time");
        //On Rs. 500 recharge get the free SMS and Free Talk time offer.
        freeSMS = operator.getFreeSMS(500);
        freeMinute = operator.getFreeMinute(500);
        System.out.println("You have " + freeSMS + "  SMS and " + freeMinute + " Minute free talk time");
    }
}
~

#### Problem
Without strategy pattern you would end up having multiple if-else or switch statements to determine the free SMS and free Talk time for different recharge amounts. If there is a new SMS or Talk time offer then you will have to modify the Operator class which violates open close design principle.

#### Solution

Using Strategy pattern each of if statement can be encapsulated as an algorithm and can be selected at run time depending on the recharge amount.

To apply the Strategy here we can introduce a **** interface and provide it's concrete implementation as **BasicPlan** and **SuperPlan** strategies as shown here


![with_strategy](data/archive/design-patterns/behavioral/assets/withStrategy.png)


~
public interface PlanStrategy {
    public int getFreeSMS();
    public int getTalkTime();
}
~

Now we can create a plan as **BasicPlan** strategy as following

~
public class BasicPlan implements PlanStrategy {
    public int getFreeSMS() {
        return 25;
    }
   
    public int getTalkTime() {
        return 20;
    }
}
~

Now we can create an other plan as **SuperPlan** strategy as following

~
public class SuperPlan implements PlanStrategy {
     public int getFreeSMS() {
        return 50;
     }
    
    public int getTalkTime() {
        return 60;
    }
}
~

Now modify the **TelecomOperator** class to use the Strategies defined above as following.

~
public class TelecomOperator {
    private PlanStrategy plan;

    public void activatePlan (PlanStrategy strategy) {
        this.plan = strategy;
    }

    public int getFreeSMS() {
        return plan.getFreeSMS();
    }
          
    public int getFreeTalkTime() {
        return plan.getTalkTime();
    }
}
~

And also we will modify the **TelecomClient** class to use these Plan strategies.

~
public class TelecomClient {

    private static final TelecomOperator operator = new TelecomOperator();

    public static void main(String args[]) {
        int freeSMS = 0;
        int freeMinute = 0;
        // On recharge of Rs. 250 set the Strategy for BasicPlan
        operator.activatePlan(new BasicPlan());
        freeSMS = operator.getFreeSMS();
        freeMinute = operator.getFreeTalkTime();
        System.out.println("You have " + freeSMS + "  SMS and " + freeMinute + " Minute free talk time");

        // On recharge of Rs. 500 set the Strategy for SuperPlan
        operator.activatePlan(new SuperPlan());
        freeSMS = operator.getFreeSMS();
        freeMinute = operator.getFreeTalkTime();
        System.out.println("You have " + freeSMS + "  SMS and " + freeMinute + " Minute free talk time");
    }
}
~

```
Output:
You have 25  SMS and 20 Minute free talk time
You have 50  SMS and 60 Minute free talk time
```

If you observe the code here, that unlike the previous TelecomOperator where for a new offer the class had to be modified, the new TelecomOperator which applied the Strategy pattern need not be modified for any new offer, just we need to create a new Plan using PlanStrategy like SuperPlan and The TelecomClient will set the strategy or use this plan ( activate it) for new recharge amount. 

