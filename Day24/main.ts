/////////////////// DAY 24 CHALLENGE ///////////////////

//QUESTION 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to 
//print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

//this function prints numbers from 1 to 5 using a loop
function printNumbersWithLet() {
    for (let i=0; i<=5; i++) {
        //uses 'let' for loop variable 'i'
        console.log(i);    //logs numbers 1 through 5
    }
    // 'i' is not accessible here, outside the loop because it's defined with 'let'
}

printNumbersWithLet();
//this shows that 'let' limits 'i' to the loop, preventing errors from using 'i' where it's not intended.


//QUESTION 71: Compare let and const: Create two examples where let allows reassignment but const does 
//not. Try to reassign a const-declared variable and catch the error.

console.log("\n");
//using 'let' for a variable that can be reassigned
let age = 23;
age = 24;    //works fine because 'let' allows reassignment 
console.log(age);   //shows 24

//trying to reassign a 'const'-decalared variable
const name1 = "Shabir";
try {
    name1 = "Hassan";  //this line will cause an error 
} catch (error) {
    // the catch block is meant to handle errors that occur during the execution of code 
    // inside the try block. 
    console.log("Error: Can't reassign a 'const'-decalred Variable.");  
};
//Output shows error because the catch block is not working as expected because the error thrown by 
//TypeScript during compilation is not a runtime exception that can be caught by a try...catch block. 
//The error 'error TS2588: Cannot assign to 'name1' because it is a constant' is a TypeScript compilation 
//error, not a runtime exception. 

//Compilation errors are detected and reported during the compilation phase, before the JavaScript code 
//is executed.

//this example illustrates that 'const' prevents changing the variable once it's set.


//QUESTION 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} 
//that uses both let and const. Show how variables declared inside the block are not accessible outside 
//of it.

console.log("\n");
//demonstraating block scope 
{
    let blockLet = "Visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet);  //works fine here
    console.log(blockConst);  //also works fine here
}

try {
    console.log(blockLet);  //this will fail
} catch (error) {
    console.log("'blockList' is not accessible outside the block.");
}

try {
    console.log(blockConst);  //this will also fail
} catch (error) {
    console.log("'blockConst' is not accessible outside the block.");
}
//TypeScript shows errors in this code because it performs static type checking during compilation.

//this shows that 'let' and 'const' keep variables safe inside the block where they're defined.
