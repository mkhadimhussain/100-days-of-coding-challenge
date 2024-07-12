// Generics And Interfaces
// Generic Class `Collection`
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item of type `T` to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// Creating an instance of `Collection` with type parameter `Book`
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
// Creating an instance of `Collection` with type parameter `Game`
var itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);
// In this code:
// - We define two interfaces, Book and Game, each representing a different type of item with specific
//   properties.
// - We create a generic class Collection<T> that allows us to create collections of items of type T.
//   The data property is an array of items, and the add method allows us to add items of type T to the
//   collection.
// - We create two instances of the Collection class:
//      - 'itemOne' is an instance with the type parameter set to 'Book', so it can only store objects that
//        conform to the 'Book' interface.
//      - 'itemTwo' is an instance with the type parameter set to 'Game', so it can only store objects that
//        conform to the 'Game' interface.
//      - We use the add method to add items of the specified types to the collections.
