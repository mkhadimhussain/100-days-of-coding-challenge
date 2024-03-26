/////////////////DAY 10 CHALLENGE//////////////////////

//QUESTION 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let personAge : number = 15
if (personAge < 18) {
    console.log("You are not elegible for CNIC")       // output 
}
else if (personAge == 18) {
    console.log("You are eligible for CNIC")
}
else if (personAge == 19) {
    console.log("you are eligible but you waste 1 year")
}
else if (personAge == 20) {
    console.log("you are eligible but you waste 2 years")
}
else if (personAge == 21) {
    console.log("you are eligible but you waste 3 years")
}
else {
    console.log("you are late")               
}
//Another Example
let person2Age : number = 23
if (person2Age < 2) {
    console.log("The person is baby")
}
else if (person2Age < 4) {
    console.log("The person is toddler")
}
else if (person2Age < 13) {
    console.log("The person is kid")
}
else if (person2Age < 20) {
    console.log("The person is teenager")
}
else if (person2Age < 65) {
    console.log("The person is adult")   //output
}
else {
    console.log("The person is elder")
}

//QUESTION 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are
//             included.

let myFavFruits : string[] = ["Pineapple",  "Water Melon", "Lychee", "Pomegranate"]
if (myFavFruits.indexOf("Pineapple") !== -1) {
    console.log("Pineapple is my fav fruit")
}
if (myFavFruits.indexOf("Lychee") !== -1) {
    console.log("Lychee is my fav fruit")
}
if (myFavFruits.indexOf("Water Melon") !== -1) {
    console.log("Water Melon is my fav fruit")
}
if (myFavFruits.indexOf("Pomegranate") !== -1) {
    console.log("Pomegranate is my fav fruit")
}
if (myFavFruits.indexOf("Orange") !== -1) {
    console.log("Orange is not my fav fruit")
}
if (myFavFruits.indexOf("Grapes") !== -1) {
    console.log("Grapes are not my fav fruit")
}

//QUESTION 30: Hello Admin: Greet users differently, especially 'admin'.

let userNamess : string[] = ["User1", "User2", "User3", "Admin", "User4"]
userNamess.forEach(userNamess => {
    if (userNamess == "Admin") {
        console.log("Welcome Dear Admin, would you like to see the status report?")
    }
    else {
        console.log(`Hello ${userNamess}, thnaks for logging in again`)
    }
})
