/////////////////// DAY 36 CHALLENGE ///////////////////

//QUESTION 106: Determine if a given year is a leap year using comparison operators.

function isLeapYear(year: number): boolean {
    // checks the conditions for a leap year
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // outputs: true
console.log(isLeapYear(1900)); // outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.


//QUESTION 107: Write a condition using logical operators that checks if a number is divisible 
//by both 2 and 3.

console.log("\n");

function isDivisibleby2And3(number: number): boolean {
    // uses the modulo operator to check for no reminder
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleby2And3(12)); // outputs: true
console.log(isDivisibleby2And3(14)); // outputs: false
// Logical operators help us verify the number's divisibility by both 2 and 3.


//QUESTION 108: Compare two strings to check if they are identical, ignoring case sensitivity.

console.log("\n");

// This function compares two strings, ignoring case sensitivity
function comparingStrings(str1: string, str2: string): boolean {
    // converts both strings to lowercasr before comparison 
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(comparingStrings("hello", "Hello"));  // outputs: true
console.log(comparingStrings("hEllO", "HeLLo"));  // outputs: true
console.log(comparingStrings("World", "Word"));   // outputs: false  (bcz both strings are not same word)
// we make both strings lowercase to ensure the comparison ignores case differences.

