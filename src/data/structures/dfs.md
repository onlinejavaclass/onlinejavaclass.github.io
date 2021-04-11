# Depth First Search - DFS

A DFS is an algorithm to travers graph-based structures (also for trees included in graphs)
in a depth order fashion. 

```
    DFS is helpful to traverse nodes of a graph only once and you want to go deep in a child from parent node as much as it is possible.
```

### Usecases:

Before jumping into discussion what DFS is, let's understand the usecase of DFS.

Imagine that you are asked to write a basic algorithm for a Chess game. The opponent which can 
be an AI computer wants to defeat the player. It should decide all available movements for a piece.

To continue, let's imagine computer starts with a Pawn. It is obvious the first move 
only go one or two upfront (just as the beginning of time). If you want to devise a  
very professional algorithm that stimulate the player, it should predict the other movements after.
 
How about the next moves? Computer can decide randomly but have a good play matters to win and challenge the game!

So for this algorithm we can use start the move in the memory and then see other available movements
until no movement is possible and pick the one to prevent defeat fast!

A pseudo code for our simple algorithm is as follows:

~
pick a piece (pawn here)
1. for any available movements in neighbor cells
    check if movement is possible
    insert it into a Stack if it was possible
2. for any movement in Stack
    peek the move
    check if it will be defeated?
    repeat 1.      
~
 

Now you can see our algorithm is getting toward intelligent movements and can simulate a real opponent.


#### Definition      

Before going to implement this chess algo let's DFS.
For a DFS we have a Graph (G for instance),and a starting node that we want to start traversing the graph 
The pseudo code for DFS is like below:

##### G: Graph, v: starting node (can be root node) , vertex: node, vertices: nodes
 
~
dfs(G, v):
    label v as discovered
    for all vertices connected to v
        check vertex is not visited before?
            call dfs(G,vertex)
~ 

Note that recursive calling acts like a Stack for us.If we want to have iterative approach we will need a stack.
Below is the non-recursive implementation or iterative approach for the above pseudo code.

 
~
dfs(G, v):
    define a stack 
    put v into stack
    while stack is not empty
        poll top vertex from stack
        label v as discovered
        for all vertices connected to v
            push vertex into stack
~ 

Imagine we have tree (sort of a simple graph), then you can see the below action when you run the algo against this tree:  

![dfs](data/structures/assets/dfs.gif)
      
## Implementation of Chess algo     

Now Let's see how to we can implement the chess algo in Java using DFS.
I will implement the iterative approach.
 
~

import java.util.Stack;
import java.util.List;
import java.util.ArrayList;

public class Chess { 

    public static void main(String[] args) {
        Vertex root = new Vertex("1:F");
        List<Vertex> vertices = new ArrayList<>();
        
        Graph g = new Graph(vertices);
    }
    
    static void dfs(Graph g, Vertex root) {
        Stack<Vertex> stack = new Stack<>();
    }
    
    class Graph {
        private final List<Vertex> vertices;
        Graph(List<Vertex> vertices) {
            this.vertices = vertices;
        }
        
        List<Vertex> vertices() {
            return this.vertices;
        }
    }
    
    class Vertex {
        private final String cell;
        Vertex(String cell){
            this.cell = cell;
        }
        
        String cellName() {
            return this.cell;
        }
        
    }
}


~
 
 

