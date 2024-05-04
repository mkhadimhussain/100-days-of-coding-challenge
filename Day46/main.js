/////////////////// DAY 46 CHALLENGE ///////////////////
//QUESTION 136: Use console.log() to debug and track the value of a variable inside a loop.
for (var i = 1; i <= 5; i++) {
    console.log("Iteration ".concat(i, ", i value:"), i); // logs the current iteration number and the value of i
}
// This loop iterates five times, logging the value of 'i' during each iteration to help with debugging.
//QUESTION 137: Implement a try-catch block to handle potential errors in a block of code.
console.log("\n");
try {
    // Itentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message); // logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
//QUESTION 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
console.log("\n");
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your brower, open the developer tools, navigate to the source 
// tab, find this script, and click on the line number where you want to pause execution. When you reload
// or run your page, execution will pause at the breakpoint.
