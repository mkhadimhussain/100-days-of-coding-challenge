/////////////////DAY 21 CHALLENGE//////////////////////
//QUESTION 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and
// motorcycles using enums, and show one example.
//makig a lsit (enum) for different types of vehicles 
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
})(vehicleType || (vehicleType = {}));
//showing one type of vehicle from the list
console.log(vehicleType.car); //it shows 0 bcz enums start counting from 0
//filling in the blueprint with an example student
var student = {
    name: "Khizar",
    age: 22,
    courses: ["Math", "OOP", "DSA"]
};
//showing the student's information
console.log(student);
//describing a circle using our shape type
var circle = {
    kind: "Circle",
    radius: 5
};
//describing a rectangle using our shape type
var rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
//showing what we described 
console.log(circle); //here's the circle
console.log(rectangle); //here's the rectangle
//we make a flexible program that can describe different shapes in detail.
