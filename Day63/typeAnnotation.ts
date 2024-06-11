// Type Annotation

// In TypeScript, type annotations are used to explicitly specify the type of a variable, function,
// or any other entity in your code. This helps the TypeScript compiler to understand and enforce the
// types you intend to use in your program. Type annotations are typically added using a colon (:)
// followed by the desired type.

// Using Type Annotations with Variables:

// You can explicitly annotate variable types in the following way:

let myNumber: number = 24;
let myString: string = "Hello, TypeScript";

console.log("My Number is: ", myNumber);
console.log("My String is: ", myString);

// In this example, myNumber is explicitly annotated with the type number, and myString is annotated
// with the type string. This makes it clear to both developers and the TypeScript compiler what types
// these variables should hold. This can help catch potential type-related issues during development.

//---------------------------------------------------------------------------------------------------

// Another way to write this code is as follows:
let myNumber1: number;
let myString1: string;

myNumber1 = 24;
myString1 = "Hello, TypeScript";

console.log("My Number is:", myNumber1);
console.log("My String is:", myNumber1);

// In this alternative approach, you first declare the variables and then assign values to them later.
// TypeScript still understands the types based on the initial declarations, providing the same level
// of type safety and code clarity.

// By using type annotations, you ensure that your code is more robust, maintainable, and less
// error-prone, making it easier to work on large projects and collaborate with other developers.
