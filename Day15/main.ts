/////////////////DAY 15 CHALLENGE//////////////////////

//QUESTION 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" 
//              list.

let magicians : string[] = ["Taimor", "Mohsin", "Zahid"];
let magicians1 : string[] = ["Taimor", "Mohsin", "Zahid"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}

function theGreat(magicians1 : string[]) {
    let great_magicians1: string[] = [];
    magicians1.forEach(element => {
        great_magicians1.push(`${element}, the great`);
    });
    return great_magicians1
}
let great_magicians1 = theGreat(magicians1.slice()); //creates a new mmodified array
console.log("Original magicians:");
show_magicians(magicians); //shows original names
//show_magicians is a function which is in "Day14"
console.log("Great Magicians:");
show_magicians(great_magicians1); //shows modified names

//QUESTION 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items : string[]) {
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

//QUESTION 45: Cars: Create detailed car objects with flexible properties

function make_car(manufacturer : string, model : string, ...options : [string, any][]): object {
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford","Fiesta", ["Color", "Blue"], ["sunroof", true]));
