"use strict";
/////////////////// DAY 33 CHALLENGE ///////////////////
//QUESTION 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// This function formats the current date as DD-MM-YYYY function
function currentDateFormat() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    const month = String(now.getMonth() + 1).padStart(2, '0'); // adda 1 bcz months are 0-indexed
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentDateFormat()); // outputs the current date in DD-MM-YYYY format
// shows today's date, neatly formated
//QUESTION 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
console.log("\n");
// Calculates how many days are left until New Year's Day
function dayUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // january 1st of next year 
    const diff = newYear.getTime() - today.getTime(); // difference in miliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); //converts to days
    return days;
}
console.log(dayUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's day.
//QUESTION 99: Generate a date object representing your next birthday and log it to the console.
console.log("\n");
// Generates a Date object for the next occurrence of a specific birthday 
function getNextBirthday(month, day) {
    const today = new Date;
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // months are 0-indexed
    if (birthday < today) {
        // if the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Repalce with your birth month and day
const nextBirthday = getNextBirthday(7, 24); // Jully 24
console.log("Next Birthday On:", nextBirthday.toLocaleDateString());
// shows the date of the next birthday
