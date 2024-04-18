/////////////////// DAY 42 CHALLENGE ///////////////////
//QUESTION 124: Create a function inside an object that returns the object's own name property using 
//the this keyword.
var person = {
    name: "Alice",
    getName: function () {
        return this.name; // uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName()); // outputs: Alice
// This method correctly identifies and returns the objects 'name' property using 'this'.
//QUESTION 125: Modify a method in an object's to use the this keyword to access another property in 
//the same object.
console.log("\n");
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea()); // outputs: 20
// The 'calculateArea' method uses 'this' to compute the area based on the object's own dimensions.
//QUESTION 126: Explain how the this keyword changes its value when used inside a nested function 
//within a method.
console.log("\n");
//Demonstrates 'this' behavior change in a nested function
var myObject = {
    property: " value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); // wprks as expected myObject, logs "Value"
        var innerMethod = function () {
            console.log(_this.property); // still accesses myObject's 'property' due to arrow function 
            //capturing 'this' from outer scoope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from 
// the outer method
