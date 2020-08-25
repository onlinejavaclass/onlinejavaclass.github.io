# Behavioural design patterns
## Memento pattern

The memento pattern is used to store an object's state so that this state can be restored at a later point. The saved state data in the memento object is not accessible outside of the object to be saved and restored. This protects the integrity of the saved state data.

In this pattern, an **Originator** class represents the object whose state we would like to save. A **Memento** class represents an object to store the state of the Originator. The **Memento** class is typically a private inner class of the **Originator**. As a result, the **Originator** has access to the fields of the memento, but outside classes do not have access to these fields. This means that state information can be transferred between the Memento and the Originator within the **Originator** class, but outside classes do not have access to the state data stored in the **Memento**.

The memento pattern also utilizes a Caretaker class. This is the object that is responsible for storing and restoring the Originator's state via a Memento object. Since the Memento is a private inner class, the Memento class type is not visible to the Caretaker. As a result, the **Memento** object needs to be stored as an Object within the **Caretaker**.

Now, let's look at an example. The DietInfo class is our Originator class. We'd like to be able to save and restore its state. It contains 3 fields: a dieter name field, the day number of the diet, and the weight of the dieter on the specified day of the diet.

This class contains a private inner class called Memento. This is our **Memento** class that is used to save the state of DietInfo. Memento has 3 fields representing the dieter name, the day number, and the weight of the dieter.

Notice the **save()** method of **DietInfo**. This creates and returns a **Memento** object. This returned **Memento** object gets stored by the caretaker. Note that **DietInfo.Memento** is not visible, so the **caretaker** can't reference **DietInfo.Memento**. Instead, it stores the reference as an Object.

The **restore()** method of **DietInfo** is used to restore the state of the **DietInfo**. The caretaker passes in the **Memento** (as an Object). The memento is cast to a **Memento** object and then the **DietInfo** object's state is restored by copying over the values from the memento.

~
// originator - object whose state we want to save
public class DietInfo {

	String personName;
	int dayNumber;
	int weight;

	public DietInfo(String personName, int dayNumber, int weight) {
		this.personName = personName;
		this.dayNumber = dayNumber;
		this.weight = weight;
	}

	public String toString() {
		return "Name: " + personName + ", day number: " + dayNumber + ", weight: " + weight;
	}

	public void setDayNumberAndWeight(int dayNumber, int weight) {
		this.dayNumber = dayNumber;
		this.weight = weight;
	}

	public Memento save() {
		return new Memento(personName, dayNumber, weight);
	}

	public void restore(Object objMemento) {
		Memento memento = (Memento) objMemento;
		personName = memento.mementoPersonName;
		dayNumber = memento.mementoDayNumber;
		weight = memento.mementoWeight;
	}

	// memento - object that stores the saved state of the originator
	private class Memento {
		String mementoPersonName;
		int mementoDayNumber;
		int mementoWeight;

		public Memento(String personName, int dayNumber, int weight) {
			mementoPersonName = personName;
			mementoDayNumber = dayNumber;
			mementoWeight = weight;
		}
	}
}
~

**DietInfoCaretaker** is the caretaker class that is used to store the state (ie, the memento) of a DietInfo object (ie, the originator). The memento is stored as an object since **DietInfo.Memento** is not visible to the caretaker. This protects the integrity of the data stored in the **Memento** object. The **caretaker'**s **saveState()** method saves the state of the **DietInfo** object. The caretaker's **restoreState()** method restores the state of the **DietInfo** object.

~
// caretaker - saves and restores a DietInfo object's state via a memento
// note that DietInfo.Memento isn't visible to the caretaker so we need to cast the memento to Object
public class DietInfoCaretaker {

	Object objMemento;

	public void saveState(DietInfo dietInfo) {
		objMemento = dietInfo.save();
	}

	public void restoreState(DietInfo dietInfo) {
		dietInfo.restore(objMemento);
	}

}
~

The **MementoDemo** class demonstrates the memento pattern. It creates a **caretaker** and then a **DietInfo** object. The **DietInfo** object's state is changed and displayed. At one point, the **caretaker** saves the state of the DietInfo object. After this, the **DietInfo** object's state is further changed and displayed. After this, the **caretaker** restores the state of the **DietInfo** object. We verify this restoration by displaying the **DietInfo** object's state.

~
public class MementoDemo {

	public static void main(String[] args) {

		// caretaker
		DietInfoCaretaker dietInfoCaretaker = new DietInfoCaretaker();

		// originator
		DietInfo dietInfo = new DietInfo("Fred", 1, 100);
		System.out.println(dietInfo);

		dietInfo.setDayNumberAndWeight(2, 99);
		System.out.println(dietInfo);

		System.out.println("Saving state.");
		dietInfoCaretaker.saveState(dietInfo);

		dietInfo.setDayNumberAndWeight(3, 98);
		System.out.println(dietInfo);

		dietInfo.setDayNumberAndWeight(4, 97);
		System.out.println(dietInfo);

		System.out.println("Restoring saved state.");
		dietInfoCaretaker.restoreState(dietInfo);
		System.out.println(dietInfo);

	}

}
~

#### The console output of the execution of MementoDemo is shown here. Notice how the state changes, and how we are able to save and restore the state of the originator via the caretaker's reference to the memento.

```    
Name: Fred, day number: 1, weight: 100
Name: Fred, day number: 2, weight: 99
Saving state.
Name: Fred, day number: 3, weight: 98
Name: Fred, day number: 4, weight: 97
Restoring saved state.
Name: Fred, day number: 2, weight: 99
```
