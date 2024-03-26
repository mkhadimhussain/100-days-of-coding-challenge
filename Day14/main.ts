/////////////////DAY 14 CHALLENGE//////////////////////

//QUESTION 40: Album: Create objects for music albums.

function music_album(artist : string, title : string, track : number) {
    let album = {artist, title};
    if (track) {
        album['tracks'] = track;
    }
    return album;
}
console.log(music_album("Artist 1", "The 1st Album", 5));
console.log(music_album("Artist 2", "The 2nd Album", 6));
console.log(music_album("Artist 3", "The 3rd Album", 7));

//QUESTION 41: Magicians: Display magician names from an array.

let magicians : string[] = ["Taimor", "Mohsin", "Zahid"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magicians => {
        console.log(magicians);
    })
}
show_magicians(magicians);

//QUESTION 42: Great Magicians: Add "the Great" to magician names.

//using the answer 41 magicians array
function make_great(magicians : string[]) {
    magicians.forEach(magicians => {
        console.log(`${magicians} the great`);
    })
}
make_great(magicians);

//Another way
console.log("\n Another way");
function great_magi(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
great_magi(magicians); //modifies the original array
show_magicians(magicians);
