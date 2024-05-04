/////////////////// DAY 39 CHALLENGE ///////////////////
//QUESTION 115: Use a switch statement to log the days of the week based on a number (1-7).
function logDaysOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day Number");
            break;
    }
}
logDaysOfWeek(4); // outputs: Wednesday
// Uses a Switch statement to select the appropriate day based on the provided number.
//QUESTION 116: Create a switch case that matches several cases to the same code block, representing 
//seasons.
console.log("\n");
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}
logSeason(7); // outputs: Summer
// Multiple cases share the same code block to represent each season.
//QUESTION 117: Implement a switch statement that evaluates an expression and uses the default case if 
//none of the cases match.
console.log("\n");
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Fair");
            break;
        case "D":
            console.log("Poor");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
            break;
    }
}
evaluateGrade("B"); // outputs: Good
evaluateGrade("M"); // outputs: Invalid Grade
// Uses a Switch statement to evaluate the grade and defaults to "Invalid Grade" if no match is found.
