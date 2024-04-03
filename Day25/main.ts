/////////////////// DAY 25 CHALLENGE ///////////////////

//QUESTION 73: Assigning and Updating Variables: Create a function where you declare a variable using 
//let and assign an initial value. Then, update its value within the same function and log both the 
//initial and updated values.

// this function shows how to assign and update variable values
function updateVariable() {
    let favNum : number = 24;  //i nitially assigns the value 24
    console.log("Initial value: ", favNum);

    favNum = 7;    // updates the value to 7
    console.log("Updated Value: ", favNum);
}
// calling the function
updateVariable();
// we assign a value to a variable and then update it, showing how values can change.


//QUESTION 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with 
//variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// this function swaps the values of two variables
function swapVaraible() {
    let a : number = 5, b :number = 10  //initially a is 5 and b is 10
    console.log("\nBefore Swaping a = ", a, "b = ", b);

    let temp = a;    // temporarily stores the value of a 
    a = b;           // the value of b assign to a, now the value of b storess in a
    b = temp;        // the value of temp assign to b, in temp the value of a is stored

    console.log("After Swaping a = ", a, "b = ", b);  // logged the swap values
}
// calling the function
swapVaraible();
// we use a temporary variables to hold one value while we swap them, like a magic trick!


//QUESTION 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic 
//operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, 
//division) on x using compound operators.

// this function uses compound assignment operators for different operators
function useCompoundOperators() {
    let x : number = 7;   // starts with x = 7
    console.log("\nInitial x:", x);

    x += 3;   // adds 3 to x (7 + 3 = 10) x = 10 here
    console.log("After Adding 3 in x:", x);   // shows x after addition

    x -= 2;   // subtracts 1 from x (10 - 2 = 8) x = 8 here
    console.log("After Subtracting 2 from x:", x); // shows x after subtraction

    x *= 3;   // multiply x by 3 (8 * 3 = 24) x = 24 here
    console.log("After Multipling with 3 x:", x); // shows x after multiplication

    x /= 2;   // divides x by 2 (24 / 2 = 12) x = 12 here
    console.log("After Dividing by 2 x:", x);    // shows x after division
}
// calling the function
useCompoundOperators();
//we simplify arithmetic operators on x using compound assignment operators, like a shorcut.
