/////////////////// DAY 30 CHALLENGE ///////////////////
//QUESTION 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input 
//and returns the number rounded to the nearest integer.
// This function rounds a decimal number to the nearest whole number
function roundToNearest(num) {
    return Math.round(num); // rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearest(3.8)); // output: 4
console.log(roundToNearest(3.4)); // output: 3
console.log(roundToNearest(3.5)); // output: 4
// this shows how the function rounds numbers either up or down
//QUESTION 89: Converting Strings to Numbers: Create a function that takes a string representing a 
//number (like "123") and converts it into an actual number type.
console.log("\n");
// This function changes a string into a number
function convertStringToNum(str) {
    return parseFloat(str); // converts the string to a number 
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNum("123.45")); // output: 123.45
console.log(convertStringToNum("98")); // output: 98
console.log(convertStringToNum("khadim")); // output: Nan (Not a Number)
// we're taking strings that look like numbers and turning them into actual number
//QUESTION 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is 
//NaN (Not a Number) and return a boolean result.
console.log("\n");
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // checks and returns true if the value is NaN, false otherwise
}
// Examples: checking different values
console.log(isValueNaN("hello")); // output: true, bcz its not a number.  
console.log(isValueNaN(123)); // output: false, bcz its number.
// this way, we can guard against unexpected non-numeric values in our calculations or inputs.
