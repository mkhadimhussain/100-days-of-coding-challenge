// Type Annotations With Function
// Type annotations in TypeScript are used to explicitly specify the data types for function
// parameters and return values. These annotations help both developers and the TypeScript
// compiler understand and enforce the expected types of values that functions should accept
// as arguments and return as results. Type annotations for functions are typically added using
// colons (:) within the function's parameter list and after the parameter list to denote the
// return type.
// Here's a simple example illustrating type annotations with functions:
// Function to calculate the area of a rectangle
function calculateRectangleArea(long, width) {
    return long * width;
}
// Calling the function with valid arguments
var long = 5;
var width = 3;
var area = calculateRectangleArea(long, width);
console.log("The Area of a rectangle is: ".concat(area));
// In this revised example:
// 1- We define a function calculateRectangleArea that takes two parameters: lengthRectAngle
//    and widthOfRectAngle . We use type annotations to specify that both parameters should be of
//    type number. Additionally, we specify that the function should return a value of type number
//    by using : number after the parameter list.
// 2- We calculate the area of a rectangle by multiplying the lengthRectAngle and widthOfRectAngle
//    parameters and returning the result.
// 3- We call the calculateRectangleArea function with valid arguments, lengthRectAngle and
//    widthOfRectAngle , which are both numbers.
// 4- We store the result of the function call in a variable named area and log the calculated area
//    to the console.
