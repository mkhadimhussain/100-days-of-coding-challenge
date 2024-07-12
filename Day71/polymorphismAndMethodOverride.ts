// Polymorphism & Method Override

// This code example demonstrates the concept of polymorphism and method override in TypeScript,
// which is commonly used in object-oriented programming. It defines abstract classes and concrete
// subclasses to illustrate these concepts.

// Define an abstract class
abstract class AbstractEntity {
    private static nextId: number = 1;

    protected constructor(public id: number, protected name: string) {} // Change 'private' to 'protected'
    
    static generatNextId(): number {
        return AbstractEntity.nextId++;
    }

    abstract getEntityInfo(): string;
}

// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }

    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id: number, name: string) {
        super(id, name);
    }

    getEntityInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}

// Generate unique IDs for entities using the static method
const entity1: AbstractEntity = new Entity(AbstractEntity.generatNextId(), "Widget");
const entity2: AbstractEntity = new AnotherEntity(AbstractEntity.generatNextId(), "Gadget");

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo());  // ID: 1, Name: Widget
console.log(entity2.getEntityInfo());  // ID: 2, Name: Gadget, Additional Info: ...

// In this example:

// 1- Abstract Class (AbstractEntity):

// - Defines an abstract class named AbstractEntity, which serves as a blueprint for other classes.
// - Features a private static property nextId to generate unique entity IDs.
// - The constructor now uses protected instead of private for the name property to allow access
//   in derived classes.

// 2- Concrete Subclasses (Entity and AnotherEntity):

// - Two concrete subclasses extend AbstractEntity: Entity and AnotherEntity.
// - Each class has its constructor, passing id and name to the parent class's constructor via
//   super(id, name).
// - They override the getEntityInfo method to provide custom entity information.

// 3- Usage of Subclasses:

// - Instances of Entity and AnotherEntity** are created and stored in variables of the abstract
//   class type (**AbstractEntity`).
// - The generateNextId method from the abstract class generates unique IDs.
// - Polymorphism is demonstrated as the overridden getEntityInfo methods are called on these
//   instances, even though they have an abstract class type.

// 4- Console Output:
// - The getEntityInfo method is called on both instances, and the results are logged, showing
//   different information based on the subclass's implementation.


// This code illustrates polymorphism and method overriding in TypeScript. It enables the creation
// of various entity types while adhering to a common interface provided by the abstract class,
// showcasing the power of object-oriented programming and inheritance.
