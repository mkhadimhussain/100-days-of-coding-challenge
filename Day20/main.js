/////////////////DAY 20 CHALLENGE//////////////////////
//QUESTION 58: 
//this program calculates the average of all scores given
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    //adds all scores together and divides by the number of scores
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
    //we add up all the scores, then divide by how many there are.
}
//Example: finding the average of four scores
console.log(averageScore(50, 90, 70, 80)); //shows the average score
//QUESTION 59: 
//this program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    //this is the magic box. It takes a number and add your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
//making a magic box that adds 5 
var addFive = makeAdder(5);
console.log(addFive(10)); //if we put 10 in the box, it gives us 15 
//we made a function (magic box) that adds 5 to any number
//QUESTION 60: 
//this profile sets itself up and can share info about the user
var userProfile = (function () {
    //the user's details are kept inside
    var name = "Ali";
    var age = 23;
    //this part shares the user's details
    return { displayInfo: function () {
            console.log("Name: ".concat(name, ", Age : ").concat(age));
        }
    };
})();
//asking the profile to tell us about the user 
userProfile.displayInfo(); //it says the user's name and age
// we made a self-setup profile that can talk about the user.
