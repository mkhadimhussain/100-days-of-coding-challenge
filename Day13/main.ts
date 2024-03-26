/////////////////DAY 13 CHALLENGE//////////////////////

//QUESTION 37: Large Shirts: Default values in make_shirt().

function make_shirt(size : string = "Large", message : string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();          //Default Large and message
make_shirt("medium")   //Medium size and default message
make_shirt("Small", "I Love coding")  //small size,  custom message

//Another Example
console.log("\n Another Example");
function bag1(color : string = "Blue", size : string = "Large", msg : string = "My New Bag") {
    console.log(`your ${size} bag with ${color} color and "${msg}" printed on it, is ready.`);
}
bag1();             //Default color, size and msg
bag1("Black");      //color = Black, default size and msg
bag1("White", "Medium");  //color = White, size = medium and default msg
bag1("Green", "small", "My green bag");  //custom color, size and msg 

//QUESTION 38: Cities: Describing cities with a function.

function describeCities(city : string, country : string) {
    console.log(`${city} is in ${country}.`);
}
//describeCities("Karachi")    t give error bcz we have another argument "Country" which is not provided.
describeCities("Karachi", "Pakistan");
describeCities("Lahore","Pakistan");
describeCities("Istanbul", "Turkey");
describeCities("Ankara", "Turkey");
describeCities("Mumbai", "India");
console.log("\n")

//QUESTION 39: City Names: Formatting city-country pairs.

function city_country(city : string, country : string) {
    console.log(`${city}, ${country}`);
}
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Jeddah", "Saudi Arabia");

//Another way
console.log("\n Another Way")
function city_country1(city : string, country : string) : string {
    return `${city}, ${country}`;
}
console.log(city_country1("Karachi", "Pakistan"));
console.log(city_country1("Istanbul", "Turkey"));
console.log(city_country1("Mumbai", "India"));
console.log(city_country1("Paris", "France"));
