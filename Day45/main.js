/////////////////// DAY 45 CHALLENGE ///////////////////
//QUESTION 133: Write a JavaScript object and convert it into a JSON string.
// Defines a JavaScript object
var person = {
    name: "Saif",
    age: 23,
    city: "Karachi",
};
// Converts the object into a JSON string
console.log(person);
var jsonString = JSON.stringify(person);
console.log(jsonString); // outputs: {"name":"Saif","age":23,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, it easy to store or transmit.
//QUESTION 134: Take a JSON string and parse it into a JavaScript object.
//QUESTION 135: Explain how you can format a JSON string with proper indentation for readability.
