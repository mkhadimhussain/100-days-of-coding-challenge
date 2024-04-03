/////////////////// DAY 32 CHALLENGE ///////////////////

//QUESTION 94: Use the .map() method to create a new array that contains the length of each word 
//from an array of words.

const words: string[] = ["TypeScript", "Language", "Linkdin", "Class"];
// uses .map() to create a new array with the length of each word 
const lengths: number[] = words.map(word => word.length);

console.log(lengths);  // output: [ 10, 8, 7, 5 ]
// Each number im the new array represents the length of the corresponding word in the original array.


//QUESTION 95: Write a function that uses the .filter() method to return an array of numbers 
//greater than 10.

console.log("\n");
// This function filters an array, keeping only numbers greater than 10
function filterGretorThan10(numbers: number[]): number[] {
    return numbers.filter(numbers => numbers > 10)
}

const numbers: number[] = [4, 10, 15, 8, 11, 9, 20];
console.log(filterGretorThan10(numbers));  //output: [ 15, 11, 20 ]
// The new array contains only the numbers that are greater then 10


//QUESTION 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

console.log("\n");
// This function calculates the sum of all numbers in an array
function calculateSum(numberss: number[]): number {
    return numberss.reduce((accumulator,current) => accumulator + current, 0);
}

const numberss: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numberss)); // output: 15
// It adds up all the numbers in the array, resulting in a single sum vlaue.
