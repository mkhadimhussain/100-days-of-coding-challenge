/////////////////DAY 4 CHALLENGE//////////////////////
//QUESTION 10: Adding Comments: Choose two of the programs you’ve written, and add at least one 
//comment to each. If the programs are straightforward at this point, just add your name and the 
//current date at the top of each program file. Then, write one sentence describing what the program does.
//M.Khadim Hussain  6 March 2024
//This is the code for printing the 8 four times in a row
console.log(6 + 2); //Adiition
console.log(11 - 3); //Subtraction
console.log(4 * 2); //Multiplication
console.log(40 / 5); //Division
//This is the code for printing your Favorite Number with string
var favr_number = 24;
console.log("My Favorite Number is : ", favr_number);
//QUESTION 11:  Names: Store the names of a few of your friends in an array called names. Print each 
//              person’s name by accessing each element in the list, one at a time.
var names = ["Saleem", "Huzaifa", "Nazia"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
;
//QUESTION 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person, but personalized with their 
//name.
for (var i = 0; i < names.length; i++) {
    console.log("What are you doing ".concat(names[i], " lets learn TypeScript."));
}
;
