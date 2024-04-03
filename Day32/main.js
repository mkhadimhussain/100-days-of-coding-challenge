/////////////////// DAY 32 CHALLENGE ///////////////////
//QUESTION 94:
var words = ["TypeScript", "Language", "Linkdin", "Class"];
// uses .map() to create a new array with the length of each word 
var lengths = words.map(function (word) { return word.length; });
console.log(lengths); // output: [ 10, 8, 7, 5 ]
// Each number im the new array represents the length of the corresponding word in the original array.
//QUESTION 95:
console.log("\n");
// This function filters an array, keeping only numbers greater than 10
function filterGretorThan10(numbers) {
    return numbers.filter(function (numbers) { return numbers > 10; });
}
var numbers = [4, 10, 15, 8, 11, 9, 20];
console.log(filterGretorThan10(numbers)); //output: [ 15, 11, 20 ]
// The new array contains only the numbers that are greater then 10
//QUESTION 96:
console.log("\n");
// This function calculates the sum of all numbers in an array
function calculateSum(numberss) {
    return numberss.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numberss = [1, 2, 3, 4, 5];
console.log(calculateSum(numberss)); // output: 15
// It adds up all the numbers in the array, resulting in a single sum vlaue.
console.log("\n\n");
var a = 0;
var b = "Correct";
if (b == "Correct") {
    a = +1;
    console.log(a);
}
else {
    console.log(a);
}
