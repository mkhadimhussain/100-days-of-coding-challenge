/////////////////// DAY 49 CHALLENGE ///////////////////
//QUESTION 145: Create a function that accepts a callback and invokes it with some arguments.
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // Outputs the sum of a and b 
};
executeCallback(add, 5, 3); // Output: 8
//QUESTION 146: Show an example of a callback function used to filter an array of numbers.
console.log("\n");
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter out numbers greater than 5
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers); // Output: [ 6, 7, 8, 9, 10 ]
//QUESTION 147: Explain how to handle errors in a callback pattern.
console.log("\n");
// Function that uses a callback pattern, including error handling
function fetchData(callback) {
    // Simulating an error condition
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a chance of error 
    if (Math.random() > 0.5) {
        callback(null, data); // No error, data is fetched successfully 
    }
    else {
        callback(error); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.log(error.message); // Handles the error 
    }
    else {
        console.log(data); // Processes the data
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
