/////////////////DAY 15 CHALLENGE//////////////////////
//QUESTION 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" 
//              list.
var magicians = ["Taimor", "Mohsin", "Zahid"];
var magicians1 = ["Taimor", "Mohsin", "Zahid"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function theGreat(magicians1) {
    var great_magicians1 = [];
    magicians1.forEach(function (element) {
        great_magicians1.push("".concat(element, ", the great"));
    });
    return great_magicians1;
}
var great_magicians1 = theGreat(magicians1.slice()); //creates a new mmodified array
console.log("Original magicians:");
show_magicians(magicians); //shows original names
//show_magicians is a function which is in "Day14"
console.log("Great Magicians:");
show_magicians(great_magicians1); //shows modified names
//QUESTION 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//QUESTION 45: Cars: Create detailed car objects with flexible properties
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["Color", "Blue"], ["sunroof", true]));
