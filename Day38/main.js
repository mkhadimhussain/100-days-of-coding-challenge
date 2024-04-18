"use strict";
/////////////////// DAY 38 CHALLENGE ///////////////////
//QUESTION 112: Create a Map that stores the names of countries as keys and their capitals as values. Add 
//three countries to the Map.
const countries = new Map();
countries.set("USA", "Washington, D.C"); // adds USA to the Map
countries.set("France", "Paris"); // adds France to the Map
countries.set("Japan", "Tokyo"); // adds Japan to the Map
console.log(countries);
// logs the Map with the countries and their capitals.
//QUESTION 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital 
//if it exists.
console.log("\n");
function logCapitalCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`The Capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
// Assuming countries Map from Question 112
logCapitalCanada(countries);
// Checks if Canada is in our Map and logs the Capital if it exists.
//QUESTION 114: Iterate over a Map of student IDs and names, and log each pair to the console.
console.log("\n");
const studnets = new Map();
studnets.set(1, "Moiz");
studnets.set(2, "Nabeel");
studnets.set(3, "Rasheed");
studnets.set(4, "Zain");
// Iterates over the Map and logs each student ID and name.
studnets.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// This loop goes through each student and logs their ID and name.
