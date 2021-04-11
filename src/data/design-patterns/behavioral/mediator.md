# Behavioural design patterns
## Iterator pattern

The Mediator Pattern is used to reduce the complexity of communication between multiple objects and classes. This mode provides an intermediary class that usually handles communication between different classes and supports loose coupling, making the code easy to maintain. The intermediary model is a behavioral model.

```
Use an intermediary object to encapsulate a series of object interactions. 
The intermediary makes the objects do not need to explicitly refer to each other, thereby loosening the coupling, and can independently change the interaction between them.
```

#### The main solution: 
there are a large number of associations between objects, which will inevitably lead to the structure of the system becoming very complicated. At the same time, if an object changes, we also need to track the objects associated with it, and make corresponding processing .


#### When to use:
Multiple classes are coupled with each other to form a network structure.


#### How to solve: 
Separate the above-mentioned network structure into a star structure.


#### Advantages: 
+ Reduce the complexity of the class and transform one-to-many into one-to-one. 
+ Decoupling between various classes.
+ Comply with the Dimit principle.

#### Disadvantages: 
+ The intermediary will be large, complicated and difficult to maintain.

#### Example

We use chat room examples to demonstrate the intermediary model. In an example, multiple users can send messages to a chat room, and the chat room displays messages to all users. 
We will create two classes **ChatRoom** and **User**. **User** objects use the **ChatRoom** method to share their messages.

**MediatorPatternDemo** , our demo class uses **User** objects to show the communication between them.


![mediator](data/design-patterns/behavioral/assets/mediator_pattern_uml_diagram.jpg)


~
package com.metao.dp.mediator;
public class User {
   private String name;
 
   public String getName() {
      return name;
   }
 
   public void setName(String name) {
      this.name = name;
   }
 
   public User(String name){
      this.name  = name;
   }
 
   public void sendMessage(String message){
      ChatRoom.showMessage(this,message);
   }
}
~

~
package com.metao.dp.mediator;

import java.util.Date;

public class ChatRoom {
    public static void showMessage(User user, String message) {
        System.out.println(new Date().toString()
                + " [" + user.getName() + "] : " + message);
    }
}
~


~
package com.metao.dp.mediator;

public class MediatorPatternDemo {
   public static void main(String[] args) {
      User robert = new User("Robert");
      User john = new User("John");

      robert.sendMessage("Hi! John!");
      john.sendMessage("Hello! Robert!");
   }
}

~

#### And output would be like this:

```
Mon Aug 24 21:15:30 CEST 2020 [Robert] : Hi! John!
Mon Aug 24 21:15:30 CEST 2020 [John] : Hello! Robert!
```
