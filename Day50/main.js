/////////////////// DAY 50 CHALLENGE ///////////////////
//QUESTION 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Uses setTimeout to log a message after a 2-second  delay
setTimeout(function () {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
// This showcases how to use setTimeout to delay actions in your code.
//QUESTION 149: Explain the concept of the event loop in JavaScript with an example.
console.log("\n");
console.log("Start");
setTimeout(function () {
    console.log("Callback executed"); // This to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
//QUESTION 150: Describe how asynchronous callbacks differ from synchronous code execution.
console.log("\n");
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (var i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before Asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
