"use strict";
// Great Magicians: Make a array of magicians names. pass the array to a function called show magicians(),
let magician = ['Harry potter', 'Hermione Granger', 'Ron weasley', 'Albus Dumledore'];
function copyArry(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'the Great' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArry = copyArry(magician);
make_great(copyMagicianArry);
console.log('\n\nThis is my orignal arry');
show_magicians(magician);
console.log('\n\nThis is my modified  copy of the arry');
show_magicians(copyMagicianArry);
