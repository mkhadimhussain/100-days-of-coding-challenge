/////////////////// DAY 41 CHALLENGE ///////////////////
//QUESTION 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue 
//statement.
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue; // skips the rest of the loop for i = 5
    }
    console.log(i); // logs numbers 1-4 and 6-10
}
// It demonstrates how to use 'continue' to skip a specific iteration.
//QUESTION 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
console.log("\n");
// initializes the counter at 10
let counter = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if (counter === 5) {
        break; // Exits the loop when counter reaches 5
    }
    console.log(counter);
    counter--; // Decrements the counter
}
// Logs the countdown from 10 but stops abruptly when it hits 5.
//QUESTION 123: Create a loop that iterates through a string and stops when it finds the first vowel.
console.log("\n");
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First Vowel found: ${char}`);
            break; // Stops the loop at the first vowel found
        }
        console.log(char); // Logs each character until a vowel is encountered
    }
}
logUntilVowel("jgflimno"); //  logs j,g,f,l then First Vowel found: i 
export {};
