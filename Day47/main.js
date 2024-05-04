/////////////////// DAY 47 CHALLENGE ///////////////////
//QUESTION 139: List three reserved words in JavaScript and create a valid use case for each.
// Reserved word: Let - used to decalare a block-scoped local variable
let count = 5;
// Reserved words: if - used to execute a block of code if a specified condition is true.
if (count > 0) {
    console.log("Count is greater than 0");
}
// Reserved word: return - used to exit a function and return a value from that function.
function add(a, b) {
    return a + b;
}
// Demonstrates valid use cases for the reserved words 'let', 'if', and 'return'.
//QUESTION 140: Explain the error that occurs when trying to use a reserved word as a variable name.
console.log("\n");
// let if = 5;  // This line would cause a syntax error
console.log("using a reserved word as a variable name causes a syntax error in JavaScript.");
// It's important to avoid using reserved words as identifiers to prevent these errors.
//QUESTION 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
console.log("\n");
// Placeholder function to simulate fetching data
function fetchSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000); // Simulating a delay of 2 seconds
    });
}
async function fetchData() {
    // Assuming fetchSomething returns a promise
    const data = await fetchSomething();
    console.log(data);
    // This 'await' keyword pauses the execution until the promise settles, and then returns with the 
    // resolved value.
}
(async () => {
    console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear function.");
    // This demonstrates how 'await' improves readability and flow in asynchronous code.
    await fetchData();
})();
export {};
