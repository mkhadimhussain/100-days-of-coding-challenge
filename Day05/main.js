/////////////////DAY 5 CHALLENGE//////////////////////
//QUESTION 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
//car, and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle.”
var fav_transport = ["Vigo", "Bike", "Hiroof", "Civic"];
for (var i = 0; i < fav_transport.length; i++) {
    console.log("I would like to own a ".concat(fav_transport[i]));
}
//another way
fav_transport.forEach(function (fav_transport) {
    console.log("I would like to own a ".concat(fav_transport));
});
//QUESTION 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
//invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your 
//list to print a message to each person, inviting them to dinner.
var guest = ["Aslam", "Saif", "Fahad", "Nadeem"];
guest.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", i would like to invite you in my Dinner Party."));
});
//QUESTION 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to 
//send out a new set of invitations with a replacement guest.
var unable = "Fahad";
console.log("".concat(unable, " is unable to attend Dinner Party."));
//replacing the guest
var newguest = "Hadi";
guest[guest.indexOf(unable)] = newguest;
guest.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", i would like to invite you in my Dinner Party."));
});
