/////////////////// DAY 31 CHALLENGE ///////////////////

//QUESTION 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

// Define an array with three favorite fruits
let favFruits: string[] = ["Pineapple", "Water Melon", "Banana"];
console.log("Before Pushing:",favFruits);
favFruits.push("Apple");   // add "Apple" in the end of a array
console.log(favFruits);
// this line adds a new fruit to our list of favorites


//QUESTION 92: Write a function to remove the last element from an array and return the removed element.

console.log("\n");
// this function removes the last element from an array and returns it
function removeLastElement<T>(arr:T[]): T | undefined {
    return arr.pop();   // removes and returns the last element of the array
}
//Example: Removing the last fruit from the array
const fruits: string[] = ["Apple", "Orange", "Pineapple"];
console.log(removeLastElement(fruits));   //output: Pineapple
console.log(fruits);  // it showa the remaining two elements of a fruits array


//QUESTION 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

console.log("\n");
// this function finds "Banana" in the fruits array and replace it with "Mango"
function replaceElement(fruits1: string[]): void {
    const index = fruits1.indexOf("Banana");  // finds the index of "Banana"
    if (index !== -1)
    fruits1[index] = "Mango";  // replaces "Banana" with "Mango" if found
}

const fruits1: string[] = ["Apple", "Banana", "Cherry"];
replaceElement(fruits1);
console.log(fruits1);
// we're swapping "Banana" for "Mango" in our fruit list.