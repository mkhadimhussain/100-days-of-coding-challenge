// Nullable Types
// Nullable types in TypeScript allow a variable or parameter to have either a specific data
// type (like string or number) or the special value null. This feature is useful for scenarios
// where a value might be absent or undefined, and you want to explicitly account for that
// possibility in your type annotations.
// In TypeScript, you can create a nullable type by appending | null to an existing data type.
// For example:
var userName = "Saif"; // The variable can hold the string or null
var age = null; // The variable can hold the number or null
console.log(age); // Output: 
// In this example, username can either store a string or null, while age can either store a
// number or null.
// Nullable types are particularly helpful when working with data that may not always be present
// or initialized. They make it clear in the type system that a variable might have the value null,
// which can help prevent runtime errors caused by trying to access properties or methods on a null value.
// Here's an example of using nullable types with function parameters:
function greetUser(userName) {
    if (userName === null) {
        console.log("Hello, Guest");
    }
    else {
        console.log("Hello, ".concat(userName));
    }
}
greetUser("Moiz"); // Output:
greetUser(null); // Output:
// In this function, username is defined as a nullable string, so it can accept either a string or null.
// The function handles both cases, providing a default greeting for guests when username is null.
// Nullable types help improve code safety and clarity by explicitly indicating the possibility of
// missing or undefined data. However, developers should be cautious when using nullable types to
// avoid unnecessary null checks and ensure proper handling of null values in their code.
