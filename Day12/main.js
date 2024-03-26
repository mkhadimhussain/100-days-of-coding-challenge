/////////////////DAY 12 CHALLENGE//////////////////////
//QUESTION 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizzas = ["Roman", "Sicilian", "Hawaiian", "Mexico"];
pizzas.forEach(function (pizzas) {
    console.log("I really Like ".concat(pizzas, " pizza"));
});
//QUESTION 35: Animals: Highlight animals with a common trait.
var animalCommon = ["Cat", "Dog", "Rabbit"];
animalCommon.forEach(function (animalCommon) {
    console.log("".concat(animalCommon, " is a good pet"));
});
//Another Example
console.log("\n Another Example");
var animalCommon1 = ["Cow", "Goat", "Buffalo", "Camel"];
animalCommon1.forEach(function (animalCommon1) {
    console.log("The meat of ".concat(animalCommon1, " is Halal"));
});
//QUESTION 36: T-Shirt: Create a function for customizing t-shirts.
function makeShirt(size, messagee) {
    console.log("Making a ".concat(size, " T-Shirt with the message \"").concat(messagee, "\" printed on it."));
}
makeShirt("medium", "Code is life");
//Another Example
console.log("\n Another Example");
function bag(color, size, message) {
    console.log("your ".concat(size, " bag with ").concat(color, " color and \"").concat(message, "\" printed on it, is ready."));
}
bag("Black", "Large", "Code is life");
