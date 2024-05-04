/////////////////// DAY 48 CHALLENGE ///////////////////
//QUESTION 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
// After 2 seconds, "Hello, world!" will be logged to the console.
//QUESTION 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
console.log("\n");
// Creates a Promise that either resolves or rejects based on a condition
const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then((result) => console.log(result)) // Handles a successful resolution
    .catch((error) => console.log(error.message)); // Handles a rejection
// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
//QUESTION 144: Explain the use of the Promise.all() method with an example.
console.log("\n");
// Example using promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Outputs: [ 3, 42, 'foo' ]
});
export {};
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.
