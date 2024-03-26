/////////////////DAY 17 CHALLENGE//////////////////////
//QUESTION 49: Function with Rest Parameters: Write a function that takes a rest parameter representing
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
//Define a function that accepts multiple hobbies as arguments
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    //loops through each hobby in the array
    hobbies.forEach(function (hobby) {
        //The forEach method is used to iterate over each element (hobby) in the hobbies array.
        //logs a statement for each hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
//calls the function with three hobbies
logHobbies("photography", "coding", "reading");
//QUESTION 50: Multiline Template Literals: Use template literals to create a multiline string that
// describes your ideal day. Include at least three different activities.
//using template literals to define a multiline string
var myIdealDay = "My ideal day would involve :\n1. Waking up early and going for a jog.\n2. Spending a few hours coding on a personal projects.\n3. Ending the day reading a good book.";
//logging the multiline string to the console
console.log(myIdealDay);
//QUESTION 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a
// rectangle and refactor it into an arrow function.
//original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
//Refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };
//Example usage of the arrow function
console.log(calculateAreaArrow(5, 7)); //logs the area of the rectangle
