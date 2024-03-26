/////////////////DAY 5 CHALLENGE//////////////////////

//QUESTION 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
//car, and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle.”

let fav_transport : string[] = ["Vigo", "Bike", "Hiroof", "Civic"]
for (let i=0; i < fav_transport.length; i++) {
    console.log(`I would like to own a ${fav_transport[i]}`)
}

//another way
fav_transport.forEach(fav_transport => {
     console.log(`I would like to own a ${fav_transport}`)
 })                      

//QUESTION 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
//invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your 
//list to print a message to each person, inviting them to dinner.

let guest : string[] = ["Aslam", "Saif", "Fahad", "Nadeem"]
guest.forEach(guest => {
    console.log(`Hello ${guest}, i would like to invite you in my Dinner Party.`)
})

//QUESTION 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to 
//send out a new set of invitations with a replacement guest.

let unable : string = "Fahad"
console.log(`${unable} is unable to attend Dinner Party.`)

//replacing the guest
let newguest : string = "Hadi"
guest[guest.indexOf(unable)] = newguest

guest.forEach(guest => {
    console.log(`Hello ${guest}, i would like to invite you in my Dinner Party.`)
})        
