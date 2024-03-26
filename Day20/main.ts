/////////////////DAY 20 CHALLENGE//////////////////////

//QUESTION 58: Average Score Calculator: Write a simple program that can take lots of scores and find
// their average.

//this program calculates the average of all scores given
function averageScore(...scores : number[]) : number {
    //adds all scores together and divides by the number of scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
    //we add up all the scores, then divide by how many there are.
}

//Example: finding the average of four scores
console.log(averageScore(50, 90, 70, 80))  //shows the average score

//QUESTION 59: Add a Special Number: Make a program that creates custom adders. These adders can add a 
//specific number to any other number you give them later.

//this program makes a function that adds a specific number
function makeAdder(valueToAdd : number): (number) => number {
    //this is the magic box. It takes a number and add your special number to it
    return function(number : number) : number {
        return number + valueToAdd;
    };
}
//making a magic box that adds 5 
let addFive = makeAdder(5);

console.log(addFive(10));   //if we put 10 in the box, it gives us 15 
//we made a function (magic box) that adds 5 to any number

//QUESTION 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell
// you the user's name and age.

//this profile sets itself up and can share info about the user
let userProfile = (function() {
    //the user's details are kept inside
    let name = "Ali";
    let age = 23;

    //this part shares the user's details
    return { displayInfo : function() {
        console.log(`Name: ${name}, Age : ${age}`);
    }
    };
})();
//asking the profile to tell us about the user 
userProfile.displayInfo();  //it says the user's name and age
// we made a self-setup profile that can talk about the user.







