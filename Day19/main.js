/////////////////DAY 19 CHALLENGE//////////////////////
//QUESTION 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list
// where each number is twice its original value.
//starts with a list of numbers
var numbers = [1, 2, 3, 4, 5,];
//double each number
var doubleNumbers = numbers.map(function (number) { return number * 2; });
//this line takes each number, double it, and put it in a new list
//show the new list of doubled numbers
console.log(doubleNumbers);
//QUESTION 56: Keep Only Strings: Given a mix of different types of items, make a new list that has 
//only the words.
// a mixed bag of  items
var mixedArray = [3, "grapes", 2, "pineapple", true, 5, false, "tomato"];
//picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
//this line checks each item: if it's a word, it goes into the new list
//shows the list of just words
console.log(stringsArray);
//picks out only the numbers
var numberArray = mixedArray.filter(function (item) { return typeof item === "number"; });
//this line checks each item: if it's a number, it goes into the new list
//shows the list of just number
console.log(numberArray);
//picks out only the boolean
var booleanArray = mixedArray.filter(function (item) { return typeof item === "boolean"; });
//this line checks each item: if it's a boolean,  it goes into the new list
//shows the list of just boolean
console.log(booleanArray);
//QUESTION 57: Find the Average Grade: Given a list of grades, calculate the average grade.
//a list of grades
var grades = [77, 92, 88, 53, 99, 63];
//calculates the average grade 
var averageGrade = grades.reduce(function (total, grade) {
    return total + grade;
}, 0) / grades.length;
//first, we add up all the grades. Then, we divide by how many grades there are to get the average.
//shows the average grade
console.log(averageGrade);
