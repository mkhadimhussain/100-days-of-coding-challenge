// Class Type Annotations

// In TypeScript, class type annotations are used to specify the types of properties, methods,
// and constructor parameters within a class. They define the expected data types and enable
// TypeScript to perform type checking to ensure that class instances adhere to the defined
// structure. Class type annotations help catch type-related errors at compile time, improving
// code reliability. Here's an explanation of class type annotations:

class Product {
    // Property type annotations
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        // Constructor parameter type annotations
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Method type annotations
    getProductInfo(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}

// Create an instance of the Product class
const product1 = new Product(1, "Widget", 20.0);

// Access class properties and call a method
console.log(product1.getProductInfo());  // Output: ID: 1, Name: Widget, Price: 20

// In this example:

// - Class Product defines properties id, name, and price, each with type annotations specifying
//   their expected data types.

// - The constructor of the Product class takes three parameters (id, name, and price), and their
//   types are annotated.

// - The getProductInfo method is defined with a return type annotation (string) to specify the
//   expected return type.

// - An instance product1 of the Product class is created and initialized with data.

// - The getProductInfo method is called on product1, and the result is logged to the console.
