/////////////////DAY 12 CHALLENGE//////////////////////

//QUESTION 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzas : string[] = ["Roman", "Sicilian", "Hawaiian", "Mexico"];
pizzas.forEach(pizzas => {
    console.log(`I really Like ${pizzas} pizza`);
});

//QUESTION 35: Animals: Highlight animals with a common trait.

let animalCommon : string[] = ["Cat", "Dog", "Rabbit"];
animalCommon.forEach(animalCommon => {
    console.log(`${animalCommon} is a good pet`)
});

 //Another Example
 console.log("\n Another Example")
let animalCommon1 : string[] = ["Cow", "Goat", "Buffalo", "Camel"];
animalCommon1.forEach(animalCommon1 => {
    console.log(`The meat of ${animalCommon1} is Halal`)
});

//QUESTION 36: T-Shirt: Create a function for customizing t-shirts.

function makeShirt(size : string, messagee :  string) {
    console.log(`Making a ${size} T-Shirt with the message "${messagee}" printed on it.`);
}
makeShirt("medium", "Code is life");

//Another Example
console.log("\n Another Example");
function bag(color : String, size : string, message : string) {
    console.log(`your ${size} bag with ${color} color and "${message}" printed on it, is ready.`);
}
bag("Black", "Large", "Code is life");
