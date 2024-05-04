/////////////////// DAY 45 CHALLENGE ///////////////////
//QUESTION 133: Write a JavaScript object and convert it into a JSON string.
// Defines a JavaScript object
var person = {
    name: "Saif",
    age: 23,
    city: "Karachi",
};
// Converts the object into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString); // outputs: {"name":"Saif","age":23,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, it easy to store or transmit.
//QUESTION 134: Take a JSON string and parse it into a JavaScript object.
console.log("\n");
// Defines a JSON string 
var jsonString1 = '{"name":"Atif","age":24,"city":"Lahore"}';
// Parse the JSON string back into a JavaScript object
var person1 = JSON.stringify(jsonString1);
console.log(person1); // Outputs the original object
// This snipprt shows how to take a JSON string and convert it back into JavaScript oject.
//QUESTION 135: Explain how you can format a JSON string with proper indentation for readability.
console.log("\n");
var person2 = {
    name: "Kamil",
    age: 25,
    city: "Islamabad",
};
// Converts the object into a JSON string with identation
var jsonString2 = JSON.stringify(person2, null, 2); // The '2' specifies the number of spaces to use as
// white space
console.log(jsonString2);
/* Output:
{
  "name": "Kamil",
  "age": 25,
  "city": "Islamabad"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
