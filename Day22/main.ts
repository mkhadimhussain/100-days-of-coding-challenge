/////////////////DAY 22 CHALLENGE//////////////////////

//QUESTION 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
//For example, if provided with "Age: " and 30, it should give back "Age: 30".

//this function mixes a text and a number into one text 
function combineStringAndNumber(text: string, number: number): string {
    //join the text and number into a single text
    return text + number;
}

//trying it out with "Age: " and 23
console.log(combineStringAndNumber("Age: ",23));
//here we put together the text and number.


//QUESTION 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover
// from dividing them using the % sign. For example, remainder(5, 2) should give 1.

//this function finds the leftover of dividing two numbers
function remainder(num1: number, num2: number): number {
    //gives back the leftover of num1 divided by num2
    return num1 % num2;
}

//trying it with 5 divided by 2
console.log(remainder(5, 2));      //output is 1
//this tells us the leftover, which is 1 here.


//QUESTION 66: Logical AND Verification: Create a function that checks two boolean (true or false)
// values. It should only say true if both are true, using the && operator. For instance, 
// checkBothTrue(true, false) should be false.

//this function sees if both inputs are true
function checkBothTrue(val1: boolean, val2: boolean): boolean {
    //only says true if both values are true
    return val1 && val2;
} 

//trying it with both true's.
console.log(checkBothTrue(true, true));   // Output true

//trying it with true and false
console.log(checkBothTrue(true, false));  // Output false


