/////////////////// DAY 54 CHALLENGE ///////////////////
// Declaration
var code;
// Assigning value
code = "TypeScript Coding";
console.log(code);
//--------------------------------------------------------------------------
//To be concise, we can combine the variable declaration and assignment into a single line:
var hello = "Hello, World!";
// Declaration        Assignment 
console.log(hello);
//--------------------------------------------------------------------------
// We can also declare multiple variables in one line:
var user = "Alice", age = 23, message = "Hello";
console.log(user, age, message);
//--------------------------------------------------------------------------
// That might seem shorter, but we don’t recommend it. For the sake of better readability, 
// please use a single line per variable.
// The multiline variant is a bit longer, but easier to read:
var user1 = "Saif";
var age1 = 21;
var message1 = "Hi";
console.log(user1, age1, message1);
//--------------------------------------------------------------------------
// Some people also define multiple variables in this multiline style:
var user2 = "Adil", age2 = 32, message2 = "Hi Dear";
console.log(user2, age2, message2);
//--------------------------------------------------------------------------
// …Or even in the “comma-first” style:
var user3 = "Moiz", age3 = 24, message3 = "Hey, how are you?";
console.log(user3, age3, message3);
//--------------------------------------------------------------------------
// We can also change it as many times as we want:
var fruit = "Apple";
fruit = "Grapes"; // Value Change
console.log(fruit);
//--------------------------------------------------------------------------
var learn = "I am Learning TypeScript";
var messages;
messages = learn;
console.log(learn); // I am Learning TypeScript
console.log(messages); // I am Learning TypeScript
//--------------------------------------------------------------------------
// A repeated declaration of the same variable is an error:
var happy = "I am Happy";
// let happy: string = "Error";   (Shows Error)
//--------------------------------------------------------------------------
// Variable Names
var userName = "Yasir";
var test123 = "Hello";
var $ = 1;
var _ = 2;
console.log($ + _);
// Examples of incorrect variable names: (Shows Error)
// let 3a: string = "Karachi";      (cannot start with a digit)
// let my-name: string = "Alice";   (hyphens '-' aren't allowed in the name)
//--------------------------------------------------------------------------
// There is a list of reserved words, which cannot be used as variable names 
// because they are used by the language itself.
// For example: let, class, return, and function are reserved.
// let let: number = 5;       // Error
// let return: number = 5;    // Error
// num: number = 7;  // Error
//--------------------------------------------------------------------------
// CONSTANT
// To declare a constant (unchanging) variable, use const instead of let:
var myBirthday = '18.04.1982';
//--------------------------------------------------------------------------
// TASKS 1
var admin;
var namee;
namee = "John";
admin = namee;
console.log(admin); // Outputs: John
//--------------------------------------------------------------------------
// TASK 2
var Earth = "Our Planet";
var currentUser = "Alice";
//--------------------------------------------------------------------------
// TASK 3
var BIRTHDAY = "24.07.2000";
var personAge = 23;
//--------------------------------------------------------------------------
