/////////////////DAY 7 CHALLENGE//////////////////////

//QUESTION 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message 
//             indicating the number of people you are inviting to dinner.

let guest1 : string[] = ["Aslam", "Saif", "Fahad", "Nadeem"];
console.log(`I am invitig ${guest1.length} people in the Dinner party.`);

//QUESTION 20: Think of something you could store in an array. For example, you could make a list of 
//mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that 
//creates a list containing these items.

let cities : string[] = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Faislabad"];
//My try
console.log(`Famous cities of Pakistan are ${cities}`);

//Actual way
console.log("Famous cities of pakistan are ",cities);

//QUESTION 21: Think of something you could store in a TypeScript Object. Write a program that creates 
//             Objects containing these items.

let book : {title : string; author : string; yearpublished : number} =
{
    title : "THE HOBBIT",
    author : "J.R.R. Tolkien",
    yearpublished : 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, publishes in ${book.yearpublished}`);

//another example of typescript object
let myself : {namee : string; city : string; age : number} =
{
    namee : "M. Khadim Hussain",
    city : "Karachi",
    age : 23
}
console.log(`My name is ${myself.namee}, i am from ${myself.city} and i am ${myself.age} years ago.`);
