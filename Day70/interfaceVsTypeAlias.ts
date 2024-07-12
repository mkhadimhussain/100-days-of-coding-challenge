// Interface vs. Type Aliases

// In TypeScript, both interfaces and type aliases serve similar purposes: defining custom data
// structures and types. However, they have some differences in terms of usage and capabilities.
// Here's a comparison between interfaces and type aliases:

// 1. Declaration Syntax:

// Interface: Declared using the 'interface' keyword. 
interface PersonExInterface {
    name: string;
    age: number;
}

// Type Alias: Decalred using the 'type' keyword.
type PersonExType = {
    name: string;
    age: number;
}

//----------------------------------------------------------------------------------------------

// 2. Extending and Implementing:

// Interface: Can be extended by other interfaces using the extends keyword and implemented by
// classes using the implements keyword.

interface Animal {
    type: string;
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    type: "dog";
    bark(): void {
        console.log("Woof!");
    }
}

// Type Alias: Cannot be extended or implemented directly. However, you can achieve similar
// results using intersection types.

type AnimalExType = {
    type: string;
}

type Monkey = AnimalExType & {
    bark(): void;
}

const labrador: Monkey = {
    type: "monkey",
    bark() {
        console.log("Woof!");
    },
};

//----------------------------------------------------------------------------------------------

// 3. Compatibility:

// Interface: Supports declaration merging. When you declare multiple interfaces with the same
// name, TypeScript will merge them into a single interface.

interface Car {
    brand: string;
}

interface Car {
    model: string;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
};

// Type Alias: Does not support declaration merging. If you declare multiple type aliases with the
// same name, you'll get an error.

//----------------------------------------------------------------------------------------------

// 4. Extensibility:

// Interface: Use when you need to define the shape of objects and also when you need to implement
// them in classes. They are more suitable for defining contracts that classes must adhere to.


// Type Alias: Use when you want to create custom types that can be combined using union types,
// intersection types, or when defining complex types.

//----------------------------------------------------------------------------------------------

// 5. Readability and Style:

// Interface: Preferred when defining shapes of objects, especially for public APIs, as they convey
// the intent clearly. They also work well with code editors' IntelliSense for auto-completion and
// documentation generation.


// Type Alias: Useful for defining unions, intersections, and more complex types. They are often
// used to give descriptive names to specific combinations of types.

//----------------------------------------------------------------------------------------------

// In most cases, the choice between interfaces and type aliases depends on your specific use case
// and coding style. Both are valuable tools in TypeScript for defining custom types and enhancing
// code readability and maintainability.
