"use strict";
// Magicians: Make a array of magicians names. pass the array to a function called show magicians(),
let magician = ['Harry potter', 'Hermione Granger', 'Ron weasley', 'Albus Dumledore'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
