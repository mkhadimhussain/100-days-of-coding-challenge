/////////////////// DAY 25 CHALLENGE ///////////////////
//QUESTION 73:
// this function shows how to assign and update variable values
function updateVariable() {
    var favNum = 24; //i nitially assigns the value 24
    console.log("Initial value: ", favNum);
    favNum = 7; // updates the value to 7
    console.log("Updated Value: ", favNum);
}
// calling the function
updateVariable();
// we assign a value to a variable and then update it, showing how values can change.
//QUESTION 74:
// this function swaps the values of two variables
function swapVaraible() {
    var a = 5, b = 10; //initially a is 5 and b is 10
    console.log("\nBefore Swaping a = ", a, "b = ", b);
    var temp = a; // temporarily stores the value of a 
    a = b; // the value of b assign to a, now the value of b storess in a
    b = temp; // the value of temp assign to b, in temp the value of a is stored
    console.log("After Swaping a = ", a, "b = ", b); // logged the swap values
}
// calling the function
swapVaraible();
// we use a temporary variables to hold one value while we swap them, like a magic trick!
//QUESTION 75:
// this function uses compound assignment operators for different operators
function useCompoundOperators() {
    var x = 7; // starts with x = 7
    console.log("\nInitial x:", x);
    x += 3; // adds 3 to x (7 + 3 = 10) x = 10 here
    console.log("After Adding 3 in x:", x); // shows x after addition
    x -= 2; // subtracts 1 from x (10 - 2 = 8) x = 8 here
    console.log("After Subtracting 2 from x:", x); // shows x after subtraction
    x *= 3; // multiply x by 3 (8 * 3 = 24) x = 24 here
    console.log("After Multipling with 3 x:", x); // shows x after multiplication
    x /= 2; // divides x by 2 (24 / 2 = 12) x = 12 here
    console.log("After Dividing by 2 x:", x); // shows x after division
}
// calling the function
useCompoundOperators();
//we simplify arithmetic operators on x using compound assignment operators, like a shorcut.
