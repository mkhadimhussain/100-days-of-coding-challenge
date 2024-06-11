// Literal Types
// Literal types are a type system feature in TypeScript that allow you to specify exactly which
// values are allowed for a particular variable or function parameter. Instead of using a general
// type like string or number, you can specify a literal type that can only take on a specific value.
// For example, you can define a literal type like this:
var direction;
direction = "up";
// direction = "Hello";  // Only accept above four strings
// In this case, the direction variable can only be assigned one of the four literal string values:
// "left", "right", "up", or "down". Any other value would result in a type error.
// Literal types are especially useful in scenarios where you want to be very explicit about the
// allowed values for a variable, parameter, or property. They provide a level of type safety by
// ensuring that only specific values are accepted, which can help catch errors at compile time
// rather than runtime.
// Here's an example of using a literal type in a function parameter:
function setColor(color) {
    // ...
}
setColor("green");
// setColor("Yellow");  // Error
// In this case, the color parameter can only be one of the three specified string literals:
// "red", "green", or "blue". This helps prevent potential bugs by restricting the input to a
// predefined set of values.
// Literal types can be combined with other TypeScript features like union types, intersection types,
// and more to create powerful and expressive type definitions in your code.
