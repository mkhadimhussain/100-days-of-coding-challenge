/////////////////DAY 18 CHALLENGE//////////////////////
//QUESTION 52: 
//sets up details about a smartphone in object
var smartPhone = {
    make: "Samsung",
    model: "Galaxy S21",
    specs: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours",
    }
};
//shows what we've set up about the smartphone
console.log(smartPhone);
//QUESTION 53: 
//a list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Pyhton"],
    framworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpacks", "Docker"]
};
//getting specific skills from the list
var languages = developerSkills.languages, framworks = developerSkills.framworks, tools = developerSkills.tools;
// object destructuring to extract specific skills from the developerSkills object. 
//It assigns the values of languages, framworks, and tools properties from developerSkills to variables 
//with the same names.
//showing a skill from each category
console.log("Language: ".concat(languages[0], ", Frameworks: ").concat(framworks[0], ", Tools: ").concat(tools[0]));
//QUESTION 54: 
//a way to make a flexible list function
function objectDynamicKey(key, value) {
    var dynamicObject = {}; //empty object
    //setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
//using the flexible list setup for a user's preference
var userPerference = objectDynamicKey("theme", "dark");
//showing the user's choice
console.log(userPerference);
