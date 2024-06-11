// Union Types

// Annotating a variable with union types means specifying that the variable can hold values
// of multiple types. Union types in TypeScript are denoted using the | symbol between the types.

// For example:
let myVar: string | number

myVar = "Hello";  // Valid assignment
console.log(myVar);

myVar = 23;  // Valid assignment
console.log(myVar);

// myVar = true;  // Invalid assignment (because "myVar" only accept string and numbers)

// In this code, myVar is annotated with a union type of string | number, which means it can hold
// either string or number values. You can assign values of either type to it without causing a type
// error. However, if you try to assign a value of a different type (e.g., boolean), TypeScript will
// report a type error because it's not part of the specified union type.
