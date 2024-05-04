//QUESTION 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Start");

setTimeout(() => {
    console.log("Callback executed");  // This to be executed by the event loop
}, 0);

console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
