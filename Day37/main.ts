/////////////////// DAY 37 CHALLENGE ///////////////////

//QUESTION 109:

const currentTime = new Date();
if (currentTime.getHours() < 12) {    
    console.log("Good Morning"); // it's morning if before 12 pm
}
// Real time output it will show Good Morning when the time is < 12.
// This simple check helps us greet users appropriately based on the time of day.


//QUESTION 110:

console.log("\n");

function assignGrades(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(assignGrades(85));  // outputs: B
console.log(assignGrades(55));  // outputs: F
console.log(assignGrades(70));  // outputs: C
// Based on the score provided, we log the corresponding score grade.


//QUESTION 111:

console.log("\n");

function personAgeGroup(age: number): string {
    if (age <= 13) {
        return "Child";
    } else if ( age <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}
console.log(personAgeGroup(11)); // outputs: Child
console.log(personAgeGroup(18)); // outputs: Teenager
console.log(personAgeGroup(24)); // outputs: Adult
// Based on the age provided, we log the corresponding age group.
