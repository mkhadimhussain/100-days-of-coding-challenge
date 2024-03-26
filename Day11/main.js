/////////////////DAY 11 CHALLENGE//////////////////////
//QUESTION 31: No Users: Ensure your user list isn’t empty.
var namesOfUsers = [];
if (namesOfUsers.length == 0) {
    console.log("We need to find some users"); //output
}
else {
    console.log("Welcome ".concat(namesOfUsers));
}
//QUESTION 32: Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ["user1", "admin", "user2", "user3", "user4"];
var newUsers = ["user5", "user6", "admin", "user7", "user8"];
newUsers.forEach(function (newUsers) {
    if (currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() == newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUsers, " is available."));
    }
});
//Another Example
console.log("\n Another Example");
var secA = ["ali", "saif", "abid", "atif", "asif"];
var secB = ["sajid", "asif", "jamil", "saif", "nabil"];
secB.forEach(function (secB) {
    if (secA.some(function (secA) { return secA.toLowerCase() === secB.toLowerCase(); })) {
        console.log("".concat(secB, " will need to enter a new username"));
    }
    else {
        console.log("".concat(secB, " is available"));
    }
});
//QUESTION 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberss.forEach(function (numberss) {
    var suffix = "th";
    if (numberss === 1) {
        suffix = "st";
    }
    else if (numberss === 2) {
        suffix = "nd";
    }
    else if (numberss === 3) {
        suffix = "rd";
    }
    console.log("".concat(numberss).concat(suffix));
});
