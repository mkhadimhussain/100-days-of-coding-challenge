// Anonymous Function
// An anonymous function in TypeScript (and in JavaScript) is a function that doesn't have a
// name. Instead of declaring a named function, you define the function directly as an expression.
// Anonymous functions are often used in various scenarios, including passing functions as arguments
// to other functions or creating functions on the fly. They are particularly useful when you need a
// small, one-off function without polluting the global scope with a function name.
var add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20)); // Output: 30
// The add variable is assigned an anonymous function that adds two numbers, num1 and num2.
