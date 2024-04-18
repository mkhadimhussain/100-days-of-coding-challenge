/////////////////// DAY 40 CHALLENGE ///////////////////
//QUESTION 118: Write a loop that logs numbers from 1 to 10 to the console.
for (var i = 0; i <= 10; i++) {
    console.log(i); // logs the current value of i
}
// Each iteration increases the value of i by 1, logging it until it reaches 10.
//QUESTION 119: Create a while loop that logs "Hello, World!" 5 times.
console.log("\n");
// initializes a counter
var count = 0;
// this while loop runs until count is 5
while (count < 5) {
    console.log("Hello, World!"); // logs "Hello, World!"
    count++; // increments count by 1
}
// Repeats logging "Hello, World!" 5 times, once per loop iteration.
//QUESTION 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
console.log("\n");
// Defines an array of favourite movies
var favouriteMovies = [
    "Inception",
    "The Matrix",
    "Interstellar",
    "The Prestige",
];
// Uses a for...of loop to iterate through favouriteMovies
for (var _i = 0, favouriteMovies_1 = favouriteMovies; _i < favouriteMovies_1.length; _i++) {
    var movie = favouriteMovies_1[_i];
    console.log(movie); // logs each movie name
}
// Each movie in the array is logged to the console, one at a time
