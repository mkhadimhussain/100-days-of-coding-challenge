/////////////////DAY 18 CHALLENGE//////////////////////

//QUESTION 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
// Include its brand, model, and other key features like how much storage it has, the size of its screen,
// and how long its battery lasts.

//sets up details about a smartphone in object
let smartPhone = {
    make : "Samsung",
    model : "Galaxy S21",
    specs : {
        storage : "128GB",
        screenSize : "6.2 inches",
        batteryLife : "18 hours",
    }
};
//shows what we've set up about the smartphone
console.log(smartPhone);

//QUESTION 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows 
//what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to
//get three specific skills from this list and show them.

//a list showing a programmer's skills in detail
let developerSkills = {
    languages : ["JavaScript", "TypeScript", "Pyhton"],
    framworks : ["React", "Angular", "Vue"],
    tools : ["Git", "Webpacks", "Docker"]
};

//getting specific skills from the list
let { languages, framworks, tools} = developerSkills
// object destructuring to extract specific skills from the developerSkills object. 
//It assigns the values of languages, framworks, and tools properties from developerSkills to variables 
//with the same names.

//showing a skill from each category
console.log(`Language: ${languages[0]}, Frameworks: ${framworks[0]}, Tools: ${tools[0]}`);

//QUESTION 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of
//each section based on what you need at that moment, like adjusting labels based on user choices.

//a way to make a flexible list function
function objectDynamicKey(key : string, value : string) {
    let dynamicObject = {};    //empty object
    //setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
//using the flexible list setup for a user's preference
let userPerference = objectDynamicKey("theme", "dark");

//showing the user's choice
console.log(userPerference);
