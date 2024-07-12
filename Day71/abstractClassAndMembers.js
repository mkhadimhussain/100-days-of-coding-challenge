// abstract classes and members
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
// Abstract classes are used as blueprints for other classes. They cannot be instantiated on their
// own but can be subclassed by other classes. Abstract classes can also contain abstract methods,
// which are declared but not implemented in the abstract class itself. Subclasses are required to
// provide implementations for these abstract methods.
var AbstarctItem = /** @class */ (function () {
    function AbstarctItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbstarctItem.generateNextId = function () {
        return AbstarctItem.nextId++;
    };
    AbstarctItem.nextId = 1;
    return AbstarctItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Item;
}(AbstarctItem));
var item1 = new Item(AbstarctItem.generateNextId(), "Widget");
var item2 = new Item(AbstarctItem.generateNextId(), "Gadget");
console.log(item1.getItemInfo()); // ID: 1, Name: Widget
console.log(item2.getItemInfo()); // ID: 2, Name: Gadget
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
