/////////////////// DAY 26 CHALLENGE ///////////////////

//QUESTION 76: Function Parameters and Return Values: Create a function that takes two numbers as 
//parameters, adds them together, and returns the result. Show how you can call this function and 
//log the result.

// this function adds two numbers and returns the result
function addNumbers(num1: number, num2: number): number {
    // calculates the sum of num1 and num2
    return num1 + num2;
}

// calling the function with two nummbers and logging the result
console.log(addNumbers(6, 8));    // output 14
// here, we ask our function to add 6 and 8, and it tells us the answer is 14.


//QUESTION 77: Default Parameters: Write a function that greets a user. It should take the user's 
//name as a parameter and say hello. If no name is given, it should greet an anonymous user.

console.log("\n");

// this function greets a user by name, or greet an anonymous user if no name is provided
function greetUser (name: string = "anonymous") {
    // says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}!`);
}

// trying calling thr function with a name and without
greetUser("Atif");   // output: Hello Atif! 
greetUser();         // output: Hello anonymous!


//QUESTION 78: Function Expressions vs. Function Declarations: Compare function expressions and 
//declarations by creating one of each that performs the same task, such as squaring a number.

console.log("\n");

// function declaration for squaring a number
function squareDeclaration(number: number): number {
    return number * number;
}

// function expression for squaring a number
const squareExpression = function(number: number): number {
    return number * number;
}

// using both functions to square the number 4
console.log(squareDeclaration(4));  // output: 16
console.log(squareExpression(4));   // output: 16
// both methods gives us the same result, showing two different ways to create functions that do 
// the same thing.


