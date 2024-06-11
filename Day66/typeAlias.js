// Type Alias
// Use the type alias for string
var myName = "Atif";
// Use the type alias for the union type
var myValue = 345;
var person1 = {
    name: "Alice",
    age: 23,
    email: "alice@example.com",
};
var person2 = {
    name: "Bob",
    age: 34,
};
console.log(person1);
console.log(person2);
var alice = {
    name: "Alice",
    age: 34,
    email: "alice.123.com",
};
var bob = {
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
