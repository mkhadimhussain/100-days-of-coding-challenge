/////////////////// DAY 43 CHALLENGE ///////////////////
var _this = this;
//QUESTION 127: Convert a traditional function expression to an arrow function.
// Traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
// converted to arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(6, 3)); // outputs: 9
console.log(arrowFunction(6, 3)); // outputs: 9
// Demonstrates the conversion of a traditional function expression to an arrow function.
//QUESTION 128: Create an arrow function that takes multiple parameters and returns the product 
//of all parameters.
console.log("\n");
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multipleParameters(2, 3, 4)); // outputs: 24
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them together.
//QUESTION 129: Explain how this behaves differently in arrow functions compared to traditional functions.
console.log("\n");
// Demonstrating 'this' in traditional vs. arrow function
var traditionalVsArrow = {
    value: "traditionalVsArrow Value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditional VsArrow object
    },
    arrowFunction: function () {
        console.log("Arrow functuon:", _this.value); // 'this' is not bound to traditionalVsArrow object but
        // to the scope in which traditioalVsArrow was defined
    },
};
traditionalVsArrow.traditionalFunction(); // logs "traditionalVsArrow Value"
traditionalVsArrow.arrowFunction(); // likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determind in traditional functions versus
// arrow function.
