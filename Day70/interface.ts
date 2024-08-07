// Interface
// An interface in TypeScript is a way to define a contract or blueprint for the shape and
// structure of an object. It specifies the properties, methods, and their types that objects
// implementing the interface should have. In essence, an interface defines a set of rules that
// an object must follow to be considered valid according to that interface.

// 1- Shape Definition: Interfaces specify object structure, including property names, types, 
//    and optional/required status.

// 2- Contract: Objects or classes adhering to an interface must implement its defined structure
//    and methods.

// 3- Type Checking: TypeScript checks if objects meet the interface's requirements, catching type
//    errors early.

// 4- Code Clarity: Interfaces document expected object properties and enhance code readability,
//    aiding object usage understanding.

// Here's a basic example of an interface definition:

interface PersonEx1 {
    name: string;
    age: number;
}

let John: PersonEx1 = {
    name: "John",
    age: 30,
}

// In this example, we define an interface "PersonEx1" with two properties: name (a string) and
// age (a number). We then create an object "John" that adheres to this interface.

// Interfaces are widely used in TypeScript for:

// - Defining the structure of data objects.
// - Specifying the shape of function parameters and return values.
// - Enforcing consistency in class definitions.
// - Facilitating code maintainability and collaboration.
