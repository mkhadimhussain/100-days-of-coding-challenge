// Polymorphism & Method Override
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// This code example demonstrates the concept of polymorphism and method override in TypeScript,
// which is commonly used in object-oriented programming. It defines abstract classes and concrete
// subclasses to illustrate these concepts.
// Define an abstract class
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    AbstractEntity.generatNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// Create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entity;
}(AbstractEntity));
// Create another concrete subclass
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(id, name) {
        return _super.call(this, id, name) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
// Generate unique IDs for entities using the static method
var entity1 = new Entity(AbstractEntity.generatNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generatNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // ID: 1, Name: Widget
console.log(entity2.getEntityInfo()); // ID: 2, Name: Gadget, Additional Info: ...
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
