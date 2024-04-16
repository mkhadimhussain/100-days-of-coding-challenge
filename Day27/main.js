/////////////////// DAY 27 CHALLENGE ///////////////////
//QUESTION 79: Creating and Accessing Object Properties: Construct an object representing a car with
//properties for make, model, and year. Then, show how you can access the model property of the car.
// this sets up an object for a car with specific details
var car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Accessing and showing the car's model property
console.log(car.model); // output: Corolla
//now for year
console.log(car.year); // outout: 2020
//QUESTION 80: Updating Object Properties: Add a property named color to the existing car object, 
//and then update the year property to 2021. Show how to perform these operations.
// Starting with our car object 
console.log("\n");
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
}; // type assertion
// Adding a new property 'color' and updating year
car1.color = "Blue";
car1.year = 2021; // updates the 'year' property
// showing the updated car object 
console.log(car1); // outputs the car object with the new color and updated year
// now our car is blue and its model year is updated to 2021.
//QUESTION 81: Iterating Over Object Properties: Write a function that takes an object as an 
//argument and logs all of its properties and values.
console.log("\n");
// This function shows every details about an object
function logObject(obj) {
    for (var property in obj) {
        // loops through each property in the object
        console.log("".concat(property, ": ").concat(obj[property]));
        // shows the property name and its vlaue
    }
}
// Using the function with a car object
logObject({ make: "Toyota", model: "Corolla", year: 2021, color: "Blue" });
// it shows us each piece of information stored about the car.
