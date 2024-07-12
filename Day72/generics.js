// Generics
// Generics in TypeScript are a feature that allows you to write reusable code by passing a
// type as a parameter to another type, whether it's a class, interface, or function. This
// means that you don't always have to specify the type explicitly when writing code, as you
// can use Generics to work flexibly with various types without resorting to using ": any."
// The main advantages of using Generics include:
// 1- Code Reusability: You can use the same code with different types without rewriting it.
// 2- Enhanced Safety: Generics help detect potential errors at compile time rather than runtime.
// 3- Dealing with Multiple Types: Generics allow you to work with a variety of types without
//    specifying a particular type.
// Generics can be used in TypeScript to create:
// - Generic Classes.
// - Generic Functions.
// - Generic Interfaces.
// - Generic Methods.
// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));
// In this example:
// - We define a generic function returnType<T> that takes a value of type T and returns the same
//   value of type T.
// - We demonstrate using the returnType function with various types, including numbers, strings,
//   booleans, and arrays.
// - We specify the type parameter T when calling the returnType function, allowing TypeScript to
//   infer the correct types for the returned values.
// - The function provides type safety, ensuring that the returned value has the same type as the
//   input value.
