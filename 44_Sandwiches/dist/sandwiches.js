"use strict";
// Sandwiches: write a function that accepts a array of item a person wants on a  sandwiches
//  The function should have one parameter that collect any item.
function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich!\n');
}
makeSandwich(['Hum', 'Cheese', 'Lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut', 'Butter', 'Jelly']);
