// Generics Multiple Types

// Generics in TypeScript can handle multiple types using union types or intersection types,
// allowing you to create flexible and versatile code that works with a variety of data types.
// Let's break down these two approaches:

// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
    return val;
}

console.log(returnTypeEx<number>(100));  // Returns 100 (number)
console.log(returnTypeEx<string>("Elzero"));  // Returns "Elzero" (string)

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val:T): T => val;

console.log(returnTypeArrowSyntax<number>(100));  // Returns 100 (number)
console.log(returnTypeArrowSyntax<string>("Elzero"));  // Returns "Elzero" (string)

// Generic Function `testType`
function testType<T>(val: T): string {
    return `The Val is ${val} And type is ${typeof val}`
}

console.log(testType<number>(100));  // Returns: "The Value Is 100 And Type Is number"
console.log(testType<string>("Elzero")); // Returns: "The Value Is Elzero And Type Is string"

// Generic Function `multipleTypes`
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value is ${valueOne} and Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
// Returns: "The First Value Is Osama And Second Value 100"

console.log(multipleTypes<string, boolean>("Elzero", true));
// Returns: "The First Value Is Elzero And Second Value true"


// In this code:

// - The returnTypeEx function and the returnTypeArrowSyntax arrow function are generic functions
//   that return the input value as is. They accept a type parameter <T> and return a value of
//   type T. We demonstrate their usage with numbers and strings.

// - The testType function is a generic function that takes a value and returns a string describing
//   the value and its type using the typeof operator.

// - The multipleTypes function is a generic function that accepts two values of potentially
//   different types T and S and returns a string combining both values.

// Each function demonstrates how generics can be used with different data types while maintaining
// type safety.
