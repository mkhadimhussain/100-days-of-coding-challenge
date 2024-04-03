/////////////////// DAY 28 CHALLENGE ///////////////////
//QUESTION 82: 
// this function counts how many characters are in a string 
function stringLength(myName) {
    return myName.length; // returns the number of charactors in the string
}
// calling/invoking the function with argument of myName
console.log(stringLength("Khadim Hussain")); // output: 14
// we're simply asking how long the string "Khasim Hussain" is, and it tells us there are 14 characters.
//QUESTION 83: 
console.log("\n");
// this function changes a string to uppercase and then to lowercase
function convertUpperLower(myName) {
    var upper = myName.toUpperCase(); // convert to uppercase
    var lower = myName.toLowerCase(); // convert to lowercase
    console.log("Upper Case : ".concat(upper));
    console.log("Lower Case : ".concat(lower));
}
// calling/invoking the function with argumen of myName
convertUpperLower("kHaDiM hUsSaIn");
//QUESTION 84: 
console.log("\n");
// this function swaps "JavaScript" with "TypeScript" in a sentence
function replaceText(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // uses a regular expression with the 'g' flag for a global replacement
}
console.log(replaceText("I Love JavaScript and JavaScript is Awesome."));
// output: I Love TypeScript and TypeScript is Awesome.
// Every "JavaScript" in the sentence is changed to "TypeScript"
