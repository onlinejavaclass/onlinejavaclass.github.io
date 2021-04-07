# Behavioral design patterns
## State pattern

State allows an object to change the behavior when its internal state changes.

```
The pattern extracts state-related behaviors into separate state classes and forces the original object to delegate the work to an instance of these classes, instead of acting on its own.
```



#### Usage of the pattern in Java

#### Usage examples: 

The State pattern is commonly used in Java to convert massive switch-base state machines into the objects.

Here are some examples of the State pattern in core Java libraries:

```
javax.faces.lifecycle.LifeCycle#execute() (controlled by the FacesServlet: behavior is dependent on current phase (state) of JSF lifecycle)
```

#### Identification: 

State pattern can be recognized by methods that change their behavior depending on the objects’ state, controlled externally.


#### Example

![state_uml](data/archive/design-patterns/behavioral/assets/tcpstate.gif)

Abstract representations for changes in state are to be created. For example, consider a class **TCPConnection** that represents different states of a network connection. 
The effect of a request such as Open depends on the current state of the connection.

By creating an abstract **TCPState** class, subclasses can define the state-specific behavior.

~
public interface TCPState {
    public void open();
    public void close();
    public void acknowledge();
}
~

Consider a model for a TCP connection,. Start by defining the **TCPConnection** class, which will provide an interface for transmitting data and handles requests to change state.

~
public class TCPListen implements TCPState {
    private final Connection connection;
    
    public TCPConnection(final Connection connection) {
        this.connection = connection;
    }
    
    public void open() {
        this.connection.open();
        System.out.println("opens connection");
    }
    
    public void close() {
        this.connection.close();
        System.out.println("closes connection");
    }
    
    public void acknowledge() {
        if(this.connection.isOpen()) {
            this.connection.acknowledge();
            System.out.println("sends acknowledge.");
        } else {
            System.out.println("can't send acknowledge to closed connection.");
        }
    }
    
    public void recieve(String message) {
        if(this.connection.isOpen()) {
            this.acknowledge(message);
        }
    }
    
    public void send(String message) {
       if(this.connection.isOpen()) {
         System.out.println("sends acknowledge.");
       }
    }   
}
~

We defined **Connection** class to hold the connection tunnel for us. This is just an very simple example implementation for checking the class refer to codes in this page GitHub. 

~
public enum State {
    OPENED, CLOSED
}
~

~
public class Connection {
    private State state = State.CLOSED;

    public void open() {
        this.state = State.OPENED;
    }

    public void close() {
        this.state = State.CLOSED;
    }

    public boolean isOpen() {
        return this.state == State.OPENED;
    }

    public void send(final Packet packet) {
        System.out.printf("packet= %s sent.%n", packet.toString());
    }

    public State getState() {
        return state;
    }
}
~

~
package com.metao.dp.state.tcp;

public class Packet {

    private final long id;
    private final String message;

    public Packet(long id, String message) {
        this.id = id;
        this.message = message;
    }

    public long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "Packet{" +
                "id:" + id +
                ", message:'" + message + '\'' +
                '}';
    }
}
~

~
public class TCPClose implements com.metao.dp.state.tcp.TCPState {
    private final Connection connection;

    public TCPClose(final Connection connection) {
        this.connection = connection;
    }

    @Override
    public void open() {
        this.connection.open();
        System.out.println("opens connection");
    }

    @Override
    public void close() {
        if (this.connection.isOpen()) {
            this.connection.close();
            System.out.println("closes connection");
            this.connection.close();
        }
    }

    @Override
    public void acknowledge(long packetId) {
        System.out.println("sends acknowledge of packet id=" + packetId);
    }

    @Override
    public void send(Packet packet) {
        if (packet.getId() == 0) {
            System.out.printf("packet %s sent. %n" , packet.toString());
        } else {
            System.out.println("can't send packet to a closed connection.");
        }
    }
}
~


~
public class TCPEstablish implements TCPState {
    private final Connection connection;

    public TCPEstablish(final Connection connection) {
        this.connection = connection;
    }

    @Override
    public void open() {
        this.connection.open();
        System.out.println("opens connection");
    }

    @Override
    public void close() {
        if (!this.connection.isOpen()) {
            this.connection.close();
            System.out.println("closes connection");
            this.connection.close();
        }
    }

    @Override
    public void acknowledge(final long packetId) {
        if (this.connection.isOpen()) {
            System.out.println("sends acknowledge of packet id=" + packetId);
        } else {
            System.out.println("can't send acknowledge to a closed connection.");
        }
    }

    @Override
    public void send(Packet packet) {
        System.out.printf("packet %s sent. %n" , packet.toString());
    }
}
~

~
public class TCPListen implements TCPState {
    private final Connection connection;

    public TCPListen(final Connection connection) {
        this.connection = connection;
    }

    @Override
    public void open() {
        this.connection.open();
        System.out.println("opens connection");
    }

    @Override
    public void close() {
        if (!this.connection.isOpen()) {
            this.connection.close();
            System.out.println("closes connection");
            this.connection.close();
        }
    }

    @Override
    public void acknowledge(long packetId) {
        if (this.connection.isOpen()) {
            System.out.println("sends acknowledge of packet id=" + packetId);
        } else {
            System.out.println("can't send acknowledge to a closed connection.");
        }
    }

    public Packet receive(Packet packet) {
        if (this.connection.isOpen()) {
            this.acknowledge(packet.getId());
        }
        return packet;
    }

    public void send(Packet packet) {
        if (this.connection.isOpen()) {
            System.out.println("sends packet= " + packet.toString());
            this.connection.send(packet);
        } else {
            System.out.println("can't send packet to a closed connection.");
        }
    }
}
~

~
public interface TCPState {
    public void open();

    public void close();

    public void acknowledge(final long packetId);

    public void send(final Packet packet);
}
~


#### Output for running our TCP state machine would be like this:

```
TCP Status CLOSED
packet Packet{id:0, message:'SYN'} sent. 
opens connection
TCP Status OPENED
sends packet= Packet{id:1, message:'s'}
packet= Packet{id:1, message:'s'} sent.
sends packet= Packet{id:2, message:'a'}
packet= Packet{id:2, message:'a'} sent.
sends packet= Packet{id:3, message:'l'}
packet= Packet{id:3, message:'l'} sent.
sends packet= Packet{id:4, message:'a'}
packet= Packet{id:4, message:'a'} sent.
sends packet= Packet{id:5, message:'m'}
packet= Packet{id:5, message:'m'} sent.
closes connection
packet Packet{id:0, message:'CLOSE'} sent. 
TCP Status CLOSED
can't send packet to a closed connection.
```
