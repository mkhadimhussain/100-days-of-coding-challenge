/////////////////DAY 21 CHALLENGE//////////////////////

//QUESTION 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and
// motorcycles using enums, and show one example.

//makig a lsit (enum) for different types of vehicles 
enum vehicleType { 
    car,
    truck,
    motorcycle
}
//showing one type of vehicle from the list
console.log(vehicleType.car);    //it shows 0 bcz enums start counting from 0
//here we are just checking what number the car category got in our list.

//QUESTION 62: Making a Student Template: Create a blueprint for student information, including their
//name, age, and the classes they're taking, and then fill in this blueprint with an example student.

//creating a blueprint (interface) for student information 
interface Student {
    name : string;
    age : number;
    courses : string[];
}

//filling in the blueprint with an example student
let student : Student = {
    name : "Khizar",
    age : 22,
    courses : ["Math", "OOP", "DSA"]
};

//showing the student's information
console.log(student);
//we are using the blueprint to make sure our student has a name, age, and list of courses.

//QUESTION 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a
// special type alias, including properties unique to each shape.

//creating a custom type (type alias) for shapes that could be circles or rectangules
type Shape = {
    kind : "Circle" | "Rectangle";
    radius? : number;     //only for circles
    width? : number;      //only for rectangles
    height? : number;     //only for rectangles
};

//describing a circle using our shape type
let circle: Shape = {
    kind : "Circle",
    radius : 5
};

//describing a rectangle using our shape type
let rectangle : Shape = {
    kind : "Rectangle",
    width : 10,
    height : 20
};

//showing what we described 
console.log(circle);     //here's the circle
console.log(rectangle);     //here's the rectangle

//we make a flexible program that can describe different shapes in detail.







