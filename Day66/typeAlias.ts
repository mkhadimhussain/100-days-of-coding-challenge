// Type Alias

// A Type Alias in TypeScript allows you to create a custom name for a type. It's a way to define
// your own custom data types that can be composed of existing types like numbers, strings, objects,
// or other custom types. Type aliases provide improved readability, maintainability, and reusability
// for complex type definitions.

// Define a type alias for string
type MyString = string;

// Use the type alias for string
let myName: MyString = "Atif";

// Define a type alias for a union of string or number
type StringOrNumber = string | number;

// Use the type alias for the union type
let myValue: StringOrNumber = 345;

// In this code:

// - MyString is a type alias for the string type.
// - StringOrNumber is a type alias for a union type that can be either a string or a number.
// - We then declare variables (myName and myValue) using these type aliases to assign values
//   of the specified types.

// let's explore another example, this time using a Type Alias with objects.

type Person = {
    name: string;
    age: number;
    email?: string;
};

const person1: Person = {
    name: "Alice",
    age: 23,
    email: "alice@example.com",
};

const person2: Person = {
    name: "Bob",
    age: 34,
};

console.log(person1);
console.log(person2);

//---------------------------------------------------------------------------------------------

// Another Example

type Employee = {
    name: string;
    age: number;
    email?: string;
};

const alice: Employee = {
    name: "Alice",
    age: 34,
    email: "alice.123.com",
};

const bob: Employee = {
    name: "Bob",
    age: 33,
};

console.log(alice);
console.log(bob);

// In this example, we define a type alias Employee for an object with three properties:
// name (a required string), age (a required number), and email (an optional string). We then
// create two objects, alice and bob, using this Employee type alias. alice includes all three
// properties, while bob omits the optional email property.

// Type aliases provide a convenient way to define complex object structures with specified types
// and reuse them throughout your code, improving code readability and maintainability.
