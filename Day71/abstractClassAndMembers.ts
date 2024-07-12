// abstract classes and members

// Abstract classes are used as blueprints for other classes. They cannot be instantiated on their
// own but can be subclassed by other classes. Abstract classes can also contain abstract methods,
// which are declared but not implemented in the abstract class itself. Subclasses are required to
// provide implementations for these abstract methods.

abstract class AbstarctItem {
    private static nextId: number = 1;

    constructor(public id: number, protected name: string) {}

    static generateNextId(): number {
        return AbstarctItem.nextId++;
    }

    abstract getItemInfo(): string
}

class Item extends AbstarctItem {
    constructor(id: number, name: string) {
        super(id,name);
    }

    getItemInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

const item1: AbstarctItem = new Item(AbstarctItem.generateNextId(), "Widget");
const item2: AbstarctItem = new Item(AbstarctItem.generateNextId(), "Gadget");

console.log(item1.getItemInfo());  // ID: 1, Name: Widget
console.log(item2.getItemInfo());  // ID: 2, Name: Gadget

// Here's a shorter explanation of the code:

// 1- AbstractItem is an abstract class serving as a blueprint for items. It includes:
//  - A private static property, nextId, for generating unique IDs.
//  - A constructor initializing id and name.
//  - A static method, generateNextId(), for obtaining the next ID.
//  - An abstract method, getItemInfo(), that must be implemented by subclasses.

// 2- Item is a concrete class extending AbstractItem. It provides a concrete implementation
//    of getItemInfo().

// 3- Two Item instances, item1 and item2, are created with unique IDs and names.

// 4- The getItemInfo() method of each item is called, displaying their information.
