/////////////////DAY 8 CHALLENGE//////////////////////

//QUESTION 22: Intentional Error: Try to produce an array index error in one of your programs. Correct
//              the error before finishing.

let animals : string[] = ["Cat", "Dog", "Cow", "Lion", "Goat", "Horse"]
// Array index              0  ,   1  ,   2  ,    3  ,   4   ,    5 
//calling index 6 which not present in array but just for intentional error
console.log(animals[6])     // output is undefined

//now calling that index which is present in array and resolving the above error
console.log(animals[2])     // output is Cow

//QUESTION 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car : string = "Vigo";
console.log("Is Car == 'Vigo'? predict True.");
console.log(car == 'Vigo');   //output is True
//if i write the "V" of 'Vigo' in small letter "v" then the output is False

console.log("Is Car == 'Honda'? predict False.");
console.log(car == 'Honda');  // output is false

//Another example
let birthMonth : string = "July"
console.log("Is Bith Month == 'July'? predict True.");
console.log(birthMonth == 'July')    //output is True
//if i write the "J" of 'July' in small letter "j" then the output is False
console.log(birthMonth == 'july')   // output is false

console.log("Is Birth Month == 'March'? predict False.")
console.log(birthMonth == 'March')   //output is false

//QUESTION 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

//TESTING EQUALITY WITH STRINGS
console.log("Testing Equality With Strings")
console.log("cat" == "cat");    //True
//console.log("cat" == "Cat");    //False

//Using the lower case function
console.log("Testing With Lower Case")
console.log("LioN".toLowerCase() == "lion");   //True

//Using Upper Case at both sides
console.log("lion".toUpperCase() == "lion".toUpperCase());   //True

//NUMERICAL TEST
console.log("Numerical Test");
console.log(10 > 5)     //True
console.log(10 > 20)    //False
console.log(7 < 21)     //True
console.log(9 < 4)      //False

//Testing using "and" and "or" operators
console.log("Test with 'and' and 'or' operators");
//The "&&" "and" operator return "true" when both operands are true, otherwise false
console.log(true && false);    //False

//The "||" "or" operator return "true" when at least one of the operands is true, otherwise false
console.log(true || false);       //True

//Test whether an item is in a array
let fruitss : string[] = ["Apple", "Mango", "Banana", "Cherry"];
console.log("Total Fruits:", fruitss);

console.log("Is 'Mango' in fruitss?");
console.log(fruitss.indexOf("Mango") !== -1);      //true

//Test whether an item is not in a array
console.log("Total Fruits:",fruitss);

console.log("Is 'Orange' in fruitss?");
console.log(fruitss.indexOf("Orange") !== -1);     //false
