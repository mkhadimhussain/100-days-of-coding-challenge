/////////////////// DAY 27 CHALLENGE ///////////////////
//QUESTION 79:
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
//QUESTION 80:
// Starting with our car object 
console.log("\n");
var car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
// Adding a new property 'color' and updating year
car1.color = "Blue";
car1.year = 2021; // updates the 'year' property
// showing the updated car object 
console.log(car1); // outputs the car object with the new color and updated year
// now our car is blue and its model year is updated to 2021.
//QUESTION 81:
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
