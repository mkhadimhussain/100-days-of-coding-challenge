/////////////////DAY 11 CHALLENGE//////////////////////

//QUESTION 31: No Users: Ensure your user list isn’t empty.

let namesOfUsers : string[] = []
if (namesOfUsers.length == 0) {
    console.log("We need to find some users")     //output
}
else {
    console.log(`Welcome ${namesOfUsers}`)
}

//QUESTION 32: Checking Usernames: Ensure uniqueness in usernames.

let currentUsers : string[] = ["user1", "admin", "user2", "user3", "user4"];
let newUsers : string[] = ["user5", "user6", "admin", "user7", "user8"];
newUsers.forEach(newUsers => {
    if (currentUsers.some(currentUsers => currentUsers.toLowerCase() == newUsers.toLowerCase())) {
        console.log(`${newUsers} will need to enter a new username`);
    }
    else {
        console.log(`${newUsers} is available.`);
    }
});
//Another Example
console.log("\n Another Example");
let secA : string[] = ["ali", "saif", "abid", "atif", "asif"];
let secB : string[] = ["sajid", "asif", "jamil", "saif", "nabil"];
secB.forEach(secB => {
    if (secA.some(secA => secA.toLowerCase() === secB.toLowerCase())) {
        console.log(`${secB} will need to enter a new username`);
    }
    else {
        console.log(`${secB} is available`);
    }
});

//QUESTION 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numberss : number[] = [1,2,3,4,5,6,7,8,9];
numberss.forEach(numberss => {
    let suffix : string = "th";
    if (numberss === 1) {
        suffix = "st";
    }
    else if (numberss === 2) {
        suffix = "nd";
    }
    else if (numberss === 3) {
        suffix = "rd";
    }
    console.log(`${numberss}${suffix}`);
});
