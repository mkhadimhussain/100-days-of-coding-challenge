/////////////////// DAY 28 CHALLENGE ///////////////////

//QUESTION 82: Find the Length of a String: Write a function that takes a string as an argument and 
//returns the number of characters in the string.

// this function counts how many characters are in a string 
function stringLength(myName: string): number {
    return myName.length;   // returns the number of charactors in the string
}
// calling/invoking the function with argument of myName
console.log(stringLength("Khadim Hussain"));  // output: 14
// we're simply asking how long the string "Khasim Hussain" is, and it tells us there are 14 characters.


//QUESTION 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it 
//to uppercase, then to lowercase, and logs both.

console.log("\n");
// this function changes a string to uppercase and then to lowercase
function convertUpperLower(myName: string) {
    let upper = myName.toUpperCase();    // convert to uppercase
    let lower = myName.toLowerCase();    // convert to lowercase
    console.log(`Upper Case : ${upper}`);
    console.log(`Lower Case : ${lower}`);
}
// calling/invoking the function with argumen of myName
convertUpperLower("kHaDiM hUsSaIn");


//QUESTION 84: Replacing Text in a String: Write a function that takes a sentence and replaces all 
//instances of the word "JavaScript" with "TypeScript".

console.log("\n");
// this function swaps "JavaScript" with "TypeScript" in a sentence
function replaceText (sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // uses a regular expression with the 'g' flag for a global replacement
}
console.log(replaceText("I Love JavaScript and JavaScript is Awesome."));
// output: I Love TypeScript and TypeScript is Awesome.
// Every "JavaScript" in the sentence is changed to "TypeScript"


