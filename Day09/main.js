/////////////////DAY 9 CHALLENGE//////////////////////
//QUESTION 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', 
//             or 'red' to a variable called alien_color.
var alien_color = "green";
if (alien_color == "green") {
    console.log("You Earned 5 points");
}
if (alien_color == "red") {
    console.log("you miss 5 points"); //no output bcz the condition is false
}
//QUESTION 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
var alien = "yellow";
if (alien == "yellow") {
    console.log("This alien is in Yellow color");
}
else {
    console.log("your yellow alien is missing");
}
//here the else block will run
var alien1 = "red";
if (alien1 == "green") {
    console.log("This alien is in green color");
}
else {
    console.log("This alien is in another color");
}
//QUESTION 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//red alien version
var alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("you win 5 points");
}
else if (alien_color1 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
//green alien version
var alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("you win 5 points");
}
else if (alien_color2 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
//yellow alien version
var alien_color3 = "yellow";
if (alien_color3 == "green") {
    console.log("you win 5 points");
}
else if (alien_color3 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
