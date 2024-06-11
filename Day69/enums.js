// Enums
// Enums in TypeScript are a way to define a set of named constant values representing discrete
// options or categories. They provide a convenient means to work with descriptive values in a
// more readable and expressive way. In essence, enums allow you to create a new data type composed
// of predefined, related values.
// Here's an example of how to define and use an enum in TypeScript:
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Tuesday;
console.log("Today is ".concat(Days[today])); // Output: Today is Tuesday
console.log("Today is ".concat(today)); // Output: Today is 2
// In this example:
// 1- We create an enum called Days with a list of constant values, starting from 0 by default. Enums
//    allow us to assign meaningful names to these values.
// 2- We assign the value Days.Wednesday to the variable today.
// 3- We use Days[today] to retrieve and display the name of the day associated with the value in today.
// Enums make code more readable by providing human-readable names for specific values, and they are commonly used for categories like days of the week or status codes.
