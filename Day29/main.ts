/////////////////// DAY 29 CHALLENGE ///////////////////

//QUESTION 85: Finding the Position of a Substring: Write a function that locates the first 
//occurrence of the word "code" within any given string and returns its position.

// this function finds where "code" first shows up in a text 
function findPosition(str: string): number {
    return str.indexOf("code"); //looks for "code" and tells where it found it
}
// Example: Searching within a sentenc
console.log(findPosition("Learn to code with JavaScript"));  //output: 9
// it tells up the position numeber where "code" starts.


//QUESTION 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" 
//is present in a given string. It should return true if found, otherwise false.

console.log("\n");
// this function checks if a sentance has "JavaSript" in it
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript");  // checks for "JavaScript" and return true or false
}
//Example: seeing if a text mentions JavaScript 
console.log(hasJavaScript("I Love JavaScript in Coding.")); //OUTPUt: true
// it simply says true if "JavaScript" is there, or false if it's not.


//QUESTION 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

console.log("\n");
// This function takes out the first 10 characters from any text
function extractSubString(str: string): string {
    return str.substring(0,10); // gets characters from start to position 10
}
// Example: taking the first 10 characters of a sentence 
console.log(extractSubString("Hello, TypeScript world."));   // shows the first 10 characters
// it gives us a smaller piece of the original text, just the begining part.



