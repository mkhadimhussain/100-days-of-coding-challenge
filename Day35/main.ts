/////////////////// DAY 35 CHALLENGE ///////////////////

//QUESTION 103:

function getRandomBoolean(): boolean {
    return Math.random() > 0.5; // returns true if the random number is greater than 0.5
}
console.log(getRandomBoolean()); // outputs either true or false randomly
// By comparing a random number to 0.5, we affectively get a true or false value randomly.


//QUESTION 104:

console.log("\n");
function getRandomColor(): string {
    const color = '0' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0');
    return color;   // returns the random color code
}
console.log(getRandomColor());  // outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.


//QUESTION 105:

console.log("\n");
function rollDice(): number {
    return Math.floor(Math.random() * 6)+ 1;  // Calculates a random integer from 1 to 6
}
console.log(rollDice());  // outputs a random number integer from 1 to 6
// Here, we mimic the action of rolling a dice and getting a result.

