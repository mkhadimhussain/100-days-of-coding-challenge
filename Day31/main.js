/////////////////// DAY 31 CHALLENGE ///////////////////
//QUESTION 91:
// Define an array with three favorite fruits
var favFruits = ["Pineapple", "Water Melon", "Banana"];
console.log("Before Pushing:", favFruits);
favFruits.push("Apple"); // add "Apple" in the end of a array
console.log(favFruits);
// this line adds a new fruit to our list of favorites
//QUESTION 92:
console.log("\n");
// this function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // removes and returns the last element of the array
}
//Example: Removing the last fruit from the array
var fruits = ["Apple", "Orange", "Pineapple"];
console.log(removeLastElement(fruits)); //output: Pineapple
console.log(fruits); // it showa the remaining two elements of a fruits array
//QUESTION 93:
console.log("\n");
// this function finds "Banana" in the fruits array and replace it with "Mango"
function replaceElement(fruits1) {
    var index = fruits1.indexOf("Banana"); // finds the index of "Banana"
    if (index !== -1)
        fruits1[index] = "Mango"; // replaces "Banana" with "Mango" if found
}
var fruits1 = ["Apple", "Banana", "Cherry"];
replaceElement(fruits1);
console.log(fruits1);
// we're swapping "Banana" for "Mango" in our fruit list.
