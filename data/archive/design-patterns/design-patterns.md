# Design patterns
Design patterns, as name suggest, are solutions for most commonly (and frequently) occurred problems while designing a software. 
Design patterns help developers efficiently solve common problems in their code. In this article, we learn how to apply design patterns to improve your efficiency in Java or Spring.
I examine the core patterns in play in the Java and Spring framework, as well as how to leverage the unique power of Spring—along with common object-oriented design patterns—to quickly solve problems. 
Learn how to leverage creational, structural, and operational patterns, as well as other framework patterns, when writing Java applications and working with Spring Framework.

### 1. Creational Design Patterns
Creational patterns often used in place of direct instantiation with constructors. They make the creation process more adaptable and dynamic. In particular, they can provide a great deal of flexibility about which objects are created, how those objects are created, and how they are initialized.

| Type   |      Description |
|----------|:-------------:|
|<a href="/#/design-patterns-creational-builder" target="_blank">Builder</a> | Builder design pattern is an alternative way to construct complex objects and should be used only when we want to build different types of immutable objects using same object building process
|<a href="/#/design-patterns-creational-prototype" target="_blank">Prototype</a> | Prototype design pattern is used in scenarios where application needs to create a large number of instances of a class, which have almost same state or differ very little.
|<a href="/#/design-patterns-creational-factory" target="_blank">Factory</a> |	Factory design pattern is most suitable when complex object creation steps are involved. To ensure that these steps are centralized and not exposed to composing classes.
|<a href="/#/design-patterns-creational-abstract-factory" target="_blank">Abstract factory</a> | Abstract factory pattern is used whenever we need another level of abstraction over a group of factories created using factory pattern.
|<a href="/#/design-patterns-creational-singleton" target="_blank">Singleton</a> |	Singleton enables an application to have one and only one instance of a class per JVM.

### 2. Structural Design Patterns
Structural design patterns show us how to glue different pieces of a system together in a flexible and extensible fashion. These patterns help us guarantee that when one of the parts changes, the entire application structure does not need to change.    

| Type   |      Description |
|----------|:-------------:|
|<a href="/#/design-patterns-structural-adapter" target="_blank">Adapter</a> |	An adapter convert the interface of a class into another interface clients expect. It lets classes work together that couldn’t otherwise because of incompatible interfaces.
|<a href="/#/design-patterns-structural-bridge" target="_blank">Bridge</a> |	Bridge design pattern is used to decouple a class into two parts – abstraction and it’s implementation – so that both can evolve in future without affecting each other. It increases the loose coupling between class abstraction and it’s implementation.
|<a href="/#/design-patterns-structural-composite" target="_blank">Composite</a>	| Composite design pattern helps to compose the objects into tree structures to represent whole-part hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.
|<a href="/#/design-patterns-structural-decorator" target="_blank">Decorator</a> |	Decorator design pattern is used to add additional features or behaviors to a particular instance of a class, while not modifying the other instances of same class.
|<a href="/#/design-patterns-structural-facade" target="_blank">Facade</a> |    Facade design pattern provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.
|<a href="/#/design-patterns-structural-flyweight" target="_blank">Flyweight</a> |	Flyweight design pattern enables use sharing of objects to support large numbers of fine-grained objects efficiently. A flyweight is a shared object that can be used in multiple contexts simultaneously. The flyweight acts as an independent object in each context.
|<a href="/#/design-patterns-structural-proxy" target="_blank">Proxy</a> |	In proxy design pattern, a proxy object provide a surrogate or placeholder for another object to control access to it. Proxy is heavily used to implement lazy loading related usecases where we do not want to create full object until it is actually needed.

### 3. Behavioral Design Patterns
Behavioral design patterns are design patterns that identify common communication patterns among objects. By doing so, these patterns increase flexibility in carrying out communication.    

| Type   |      Description |
|----------|:-------------:|
|<a href="/#/design-patterns-behavioral-command" target="_blank">Command</a>| Is an object which is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
|<a href="/#/design-patterns-behavioral-chain-of-responsibilities" target="_blank">Chain of Responsibilities</a> | lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.                                                                                                                  
|<a href="/#/design-patterns-behavioral-iterator" target="_blank">Iterator</a>| is used to sequentially access the elements of the collection object without knowing the underlying representation of the collection object..
|<a href="/#/design-patterns-behavioral-mediator" target="_blank">Mediator</a> | is used to reduce the complexity of communication between multiple objects and classes. This mode provides an intermediary class that usually handles communication between different classes and supports loose coupling, making the code easy to maintain. The intermediary model is a behavioral model.
|<a href="/#/design-patterns-behavioral-memento" target="_blank">Memento</a> | is used to store an object's state so that this state can be restored at a later point. The saved state data in the memento object is not accessible outside of the object to be saved and restored. This protects the integrity of the saved state data.
|<a href="/#/design-patterns-behavioral-observer" target="_blank">Observer |  lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.  
|<a href="/#/design-patterns-behavioral-state" target="_blank">State |	is used to alter the behaviour of an object as its internal state changes. The pattern allows the class for an object to apparently change at run-time.
|<a href="/#/design-patterns-behavioral-strategy" target="_blank">Strategy |  is used to create an interchangeable family of algorithms from which the required process is chosen at run-time.
|<a href="/#/design-patterns-behavioral-throttling" target="_blank">Throttling | ensures that a given client is not able to access service resources more than the assigned limit.                                                                                      


### 4. Concurrency Design Patterns
Concurrency design patterns are those types of design patterns that deal with the multi-threaded programming paradigm.    

| Type   |      Description |
|----------|:-------------:|
|<a href="/#/design-patterns-concurrency-async-method-invocation" target="_blank">Async Method Invocation |  provides parallel processing of multiple independent tasks and retrieving the results via callbacks or waiting until everything is done.
|<a href="/#/design-patterns-concurrency-saga" target="_blank">Saga  | is used in distributed services to perform a group of operations atomically, specially in microservice architecture.


### 5. Idioms
An idiom is something small, like "use an interface for the type of a variable that holds a collection"    

| Type   |      Description |
|----------|:-------------:|
|<a href="/#/design-patterns-idiom-lazy-loading" target="_blank">Lazy Loading| is used to used to defer initialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used.
