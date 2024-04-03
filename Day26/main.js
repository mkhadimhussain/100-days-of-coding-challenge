/////////////////// DAY 25 CHALLENGE ///////////////////
//QUESTION 76:
// this function adds two numbers and returns the result
function addNumbers(num1, num2) {
    // calculates the sum of num1 and num2
    return num1 + num2;
}
// calling the function with two nummbers and logging the result
console.log(addNumbers(6, 8)); // output 14
// here, we ask our function to add 6 and 8, and it tells us the answer is 14.
//QUESTION 77:
console.log("\n");
// this function greets a user by name, or greet an anonymous user if no name is provided
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    // says hello to the given name or to an anonymous user
    console.log("Hello, ".concat(name, "!"));
}
// trying calling thr function with a name and without
greetUser("Atif"); // output: Hello Atif! 
greetUser(); // output: Hello anonymous!
//QUESTION 78:
console.log("\n");
// function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
// using both functions to square the number 4
console.log(squareDeclaration(4)); // output: 16
console.log(squareExpression(4)); // output: 16
// both methods gives us the same result, showing two different ways to create functions that do 
// the same thing.
