/////////////////// DAY 23 CHALLENGE ///////////////////

//QUESTION 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a
// string that represents a number (e.g., "5"). Return their sum as a number.

//this function add a number and a string that represents a number like "5"
function addNumberAndString(number1: number, numberString: string): number {
    //convert the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

//trying it with 4 and "6"
console.log(addNumberAndString(4, "6"));    //output is 10
//the string "6" is turned into the number, and then added to 4.


//QUESTION 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns
// their product. Round the result to two decimal places.

console.log("\n");
//this function multiplies two decimal numbers
function multiplyDecimals(dNum1: number, dNum2: number): number {
    //multiplies the numbers and rounds the result to two decimal places
    return Math.round((dNum1 * dNum2) * 100) / 100;
}

//trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2));    //0.02
//after multiplying, we round to make the result easier to read.


//QUESTION 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns
// both the quotient and the remainder. Use an object to return both values.

console.log("\n");
//this function divides two numbers and finds the quotient and reminder
//we specifies that the function returns an object with properties quotient and remainder
function divideAndRemainder (dividend: number, divisor: number,): { quotient: number, remainder: number} {
    //calculates the quotient and reminder
    //rounding down to the nearest integer using Math.floor
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;

    //returns both in an object 
    return { quotient, remainder};
    //Returns an object containing the calculated quotient and remainder as properties.
}

//trying it with 10 divided by 3 
console.log(divideAndRemainder(10, 3));   //output {quotient : 3, remainder: 1}
// it shows how many times 3 goes into 10, and what's left ovver.
