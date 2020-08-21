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

The text editor in this example creates new command objects each time a user interacts with it. After executing its actions, a command is pushed to the history stack.

Now, to perform the undo operation, the application takes the last executed command from the history and either performs an inverse action or restores the past state of the editor, saved by that command.

