/////////////////// DAY 43 CHALLENGE ///////////////////

//QUESTION 127: Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
};
// converted to arrow function
const arrowFunction = (a, b) => a + b;

console.log(traditionalFunction(6, 3));  // outputs: 9
console.log(arrowFunction(6, 3));  // outputs: 9
// Demonstrates the conversion of a traditional function expression to an arrow function.


//QUESTION 128: Create an arrow function that takes multiple parameters and returns the product 
//of all parameters.

console.log("\n");

const multipleParameters = (...numbers: number[]) =>
    numbers.reduce((total, number) => total * number, 1); // 1 is initial value

console.log(multipleParameters(2,3,4));  // outputs: 24

// Initial value of total: 1
// Iteration 1: total * number = 1 * 2 = 2 (new total)
// Iteration 2: total * number = 2 * 3 = 6 (new total)
// Iteration 3: total * number = 6 * 4 = 24 (final total)

// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.


//QUESTION 129: Explain how this behaves differently in arrow functions compared to traditional functions.

console.log("\n");

// Demonstrating 'this' in traditional vs. arrow function
const traditionalVsArrow = {
    value: "traditionalVsArrow Value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditional VsArrow object
    },
    arrowFunction: () => {
        console.log("Arrow functuon:", this.value); // 'this' is not bound to traditionalVsArrow object but
        // to the scope in which traditioalVsArrow was defined
    },
};

traditionalVsArrow.traditionalFunction(); // logs "traditionalVsArrow Value"
traditionalVsArrow.arrowFunction();  // likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determind in traditional functions versus
// arrow function.




