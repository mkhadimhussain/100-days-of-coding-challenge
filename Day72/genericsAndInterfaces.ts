// Generics And Interfaces

// Generics in classes and interfaces allow us to create reusable and type-safe data structures
// that can work with different types, enhancing code flexibility and maintainability. In this
// example, we've demonstrated how the Collection class can be used with different item types
// while ensuring type safety.

// In this example, we'll explore the use of generics in classes and interfaces to create a
// flexible Collection class

// Interface definitions for Book and Game
interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

// Generic Class `Collection`
class Collection<T> {
    public data: T[] = [];

    // Method to add an item of type `T` to the collection
    add(item: T): void {
        this.data.push(item);
    }
}

// Creating an instance of `Collection` with type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });

console.log(itemOne);

// Creating an instance of `Collection` with type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150});

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
