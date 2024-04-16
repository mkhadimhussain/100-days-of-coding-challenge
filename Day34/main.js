/////////////////// DAY 34 CHALLENGE ///////////////////
//QUESTION 100: Use the JavaScript Math object to find the square root of 144.
// Finds the square root of 144 using Mah.aqr()
var squareRoot = Math.sqrt(144);
console.log(squareRoot); // Output: 12
// This line effectlively calculates and shows the square root of 144.
//QUESTION 101: Generate a random integer between 1 and 10.
console.log("\n");
// Generates a random integer between 1 and 10
function generateRandomInt() {
    return Math.floor(Math.random() * 10) * 1;
    // .floor() will show 1.7, 1.3, 1.5 as 1
    // .random() will show random number b/w 0 to 1 so we (* 10) it will showa number b/w 0 t0 10
    // * 1
}
console.log(generateRandomInt()); // Outputs random integers between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer with our range;
//QUESTION 102: Calculate and log the absolute difference between the number -5 and 5.
console.log("\n");
// Calculaes the absolute difference between -5 and 5
var difference = Math.abs(-5 - 5);
console.log(difference);
// This line shows the absoulte value of the difference between -5 and g, ignoring the sign
