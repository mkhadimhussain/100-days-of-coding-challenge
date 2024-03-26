/////////////////DAY 6 CHALLENGE//////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//QUESTION 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Babar", "Noman", "Ayaz", "Zain"];
console.log("I have found a bigger table");
guests.unshift("Mudassir"); //add from top
guests.splice(guests.length / 2, 0, "Hamza"); //add in the middle total/2
//            total element / 2 ,0 element is removed,
//             4/2 = 2, on index 2 "Hamza" will be add
guests.splice(guests.length / 4, 0, "Ghafoor");
//             6/4 = 1.5 = 1, on index 1 "Ghafoor" will be add 
guests.push("Ikram"); //add from bottom
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would like to invite you in my Dinner Party"));
});
//QUESTION 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can 
//             only invite two guests.
console.log("Unfortunatly i only invite two people for Dineer party.");
//while loops continous until guests lenght is > 2 and pop one element and print the msg, till length =2
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", i can't invite you"));
}
//here in guests array only 2 elements/persons is left so they are still invited
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you're still invited"));
});
//for remove the all elements from the array
guests.splice(0, guests.length);
//     splice(start, deletCount)   from guests 0 to guests whole length
console.log(guests);
//QUESTION 18: Seeing the World: Think of at least five places you’d like to visit.
var places = ["Turkey", "Austria", "London", "Germony", "China"];
places.forEach(function (places) {
    console.log("Love to visit ".concat(places));
});
//IN DIFFERENT ORDERS
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort()); //Ascending order
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse()); //Decending order
console.log("Original order:", places);
places.reverse(); //it just reverse the places array
console.log("Reverse of Original:", places);
places.reverse(); //it reverse the last reverse which make the original array
console.log("Reverse of reverse of Original:", places); //2 times reverse make original array
places.sort(); //Array in Ascending order
console.log("Alphabetical order:", places);
places.reverse(); //reverse the current array, so here it just reverse the ascending order
console.log("Reverse of alphabetical order", places); //show descending but its just reverse the ascending 
//ALPHABETICAL ORDER IN VARIABLE 
var alphabeticalOrder = __spreadArray([], places, true).sort();
console.log("I want to visit ".concat(alphabeticalOrder));
//REVERSE ALPHABETICAL ORDER OR DECENDING ORDER IN VARIABLE
var reverseAlphabetical = __spreadArray([], places, true).sort().reverse();
console.log("I want to see ".concat(reverseAlphabetical));
