# Behavioural design patterns
## Iterator pattern

Iterator Pattern is a very commonly used design pattern in Java. This aim is used to sequentially access the elements of the collection object without knowing the underlying representation of the collection object.
```
To provide a way to sequentially access each element in an aggregated object without exposing the internal representation of the object.
```

#### Advantages: 
+ It supports traversing an aggregate object in different ways. 
+ The iterator simplifies the aggregation class. 
+ There can be multiple traversals on the same aggregation. 
+ In the iterator mode, it is very convenient to add new aggregation classes and iterator classes, without modifying the original code.

#### Disadvantages: 

Since the iterator mode separates the responsibilities of storing data and traversing data, adding new aggregate classes requires corresponding new iterator classes, and the number of classes increases in pairs, which increases the complexity of the system to a certain extent.

#### Usage scenarios: 
+ Access the content of an aggregate object without exposing its internal representation. 
+ Need to provide multiple traversal methods for aggregated objects. 
+ Provide a unified interface for traversing different aggregation structures.

Note: The iterator pattern is to separate the traversal behavior of the collection object, and abstract an iterator class to be responsible, so that the internal structure of the collection is not exposed, and the data inside the collection can be transparently accessed by external code.

We will create an **Iterator** interface that describes navigation methods and a **Container** interface that returns an iterator . 
The entity class that implements the **Container** interface will be responsible for implementing the **Iterator** interface.

**IteratorPatternDemo** , our demo class uses the entity class **NamesRepository** to print the Names stored in the **NamesRepository** as a collection .


![iterator_class_diagram](data/design-patterns/behavioral/assets/iterator_pattern_uml_diagram.jpg)

~
public interface Iterator {
    public boolean hasNext();

    public Object next();
}
~ 
       
~
public interface Container {
    public Iterator getIterator();
}   
~

Create an entity class that implements the Container interface. This class has an internal class NameIterator that implements the Iterator interface .

~
public class NameRepository implements Container {
   public String[] names = {"Robert", "John", "Julie", "Lora"};
 
   @Override
   public Iterator getIterator() {
      return new NameIterator();
   }
 
   private class NameIterator implements Iterator {
 
      int index;
 
      @Override
      public boolean hasNext() {
         if(index < names.length){
            return true;
         }
         return false;
      }
 
      @Override
      public Object next() {
         if(this.hasNext()){
            return names[index++];
         }
         return null;
      }     
   }
}
~

~
public class IteratorPatternDemo {

    public static void main(String[] args) {
        NameRepository namesRepository = new NameRepository();

        for (Iterator iter = namesRepository.getIterator(); iter.hasNext(); ) {
            String name = (String) iter.next();
            System.out.println("Name : " + name);
        }
    }
}
~



#### And yes, the output would be like this

```
Name : Robert
Name : John
Name : Julie
Name : Lora
```
