### Liskov Substitution Principle Explained

This article gives a quick intro to the Liskov Substitution Principle (LSP), why it’s important, and how to use it to validate object-oriented designs. We’ll also see some examples and learn how to correctly identify and fix violations of the LSP.

### What is the LSP?

At a high level, the LSP states that in an object-oriented program, if we substitute a superclass object reference with an object of any of its subclasses, the program should not break.

Say we had a method that used a superclass object reference to do something:

~
class SomeClass {
  
  void aMethod(SuperClass superClassReference) {
    doSomething(superClassReference);
  }
  
  // definition of doSomething() omitted
}
~

This should work as expected for every possible subclass object of SuperClass that is passed to it. If substituting a superclass object with a subclass object changes the program behavior in unexpected ways, the LSP is violated.

The LSP is applicable when there’s a supertype-subtype inheritance relationship by either extending a class or implementing an interface. 

```
We can think of the methods defined in the supertype as defining a contract. Every subtype is expected to stick to this contract. If a subclass does not adhere to the superclass’s contract, it’s violating the LSP.
```

This makes sense intuitively - a class’s contract tells its clients what to expect. If a subclass extends or overrides the behavior of the superclass in unintended ways, it would break the clients.

How can a method in a subclass break a superclass method’s contract? There are several possible ways:

1. Returning an object that’s incompatible with the object returned by the superclass method.
2. Throwing a new exception that’s not thrown by the superclass method.
3. Changing the semantics or introducing side effects that are not part of the superclass’s contract.

Java and other statically-typed languages prevent 1 (unless we use very generic classes like Object) and 2 (for checked exceptions) by flagging them at compile-time. It’s still possible to violate the LSP in these languages via the third way.

#### Why is the LSP Important?

LSP violations are a design smell. We may have generalized a concept prematurely and created a superclass where none is needed.
Future requirements for the concept might not fit the class hierarchy we have created.

If client code cannot substitute a superclass reference with a subclass object freely, it would be forced to do instanceof checks and specially handle some subclasses.
If this kind of conditional code is spread across the codebase, it will be difficult to maintain.

Every time we add or modify a subclass, we would have to comb through the codebase and change multiple places. This is difficult and error-prone.

It also defeats the purpose of introducing the supertype abstraction in the first place which is to make it easy to enhance the program.

It may not even be possible to identify all the places and change them - we may not own or control the client code. We could be developing our functionality as a library and providing them to external users, for example.

#### Violating the LSP - An Example

Suppose we were building the payment module for our eCommerce website. Customers order products on the site and pay using payment instruments like a credit card or a debit card.


