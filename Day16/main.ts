/////////////////DAY 16 CHALLENGE//////////////////////

//QUESTION 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, 
//             model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {  //objet
    make : "Dell",
    model : "XPS 15",
    year : 2021,
    describe : function() {
//describe is a method (function) that when called, prints a description of the laptop using the 
//properties year, make, and model.
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();  

//QUESTION 47: Advanced Array Destructuring: Given an array of objects representing different laptops, 
// each with properties make, model, and year, use array destructuring to assign the first and second 
//laptops to variables. Then, log these variables.

let laptops = [    //array
    { make : "Dell", model : "XPS 15", year : 2021},
    { make : "Apple", model : "MacBook Pro", year : 2020},
    { make : "HP", model : "Spectre x360", year : 2021}
];
let [laptop1, laptop2] = laptops;
//destructuring assignment to extract the first two elements of the array into variables laptop1 
//and laptop2. 
console.log(laptop1);
console.log(laptop2);

//QUESTION 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different 
//sets of laptops. Use the spread operator to combine these arrays into a single array sorted in 
//ascending order, then log the result.

let pricesSet1 = [1600, 1100, 1200];
let pricesSet2 = [1500, 1300, 1400];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);   //spread syntax '...'
//here we use the spread syntax ... to combine the elements of both arrays into a new array combinedPrices.
//".sort((a, b) => a - b)" sorts the combined array in ascending order.
console.log(combinedPrices);
