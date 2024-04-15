"use strict";
// Equality and inequality test 1
console.log("Equaity test with strings:", "Apple");
// Equality and inequality test 2
console.log("Equaity test with strings:", "Apple" != "orange");
// tests using the lower case funtion
console.log("lowe case funtion test", "HELLO".toLowerCase() === "hello");
// Numerical tests involving equality
console.log("Equality test with number: ", 26 === 26);
// Numerical test involving inquality
console.log("Inquality test with number:", 26 != 35);
// grater than test
console.log("Grater then test: ", 10 > 5);
// less then test
console.log("less than test: ", 5 < 10);
// grater than or equal to
console.log("Grater than or equal to: ", 10 >= 10);
// less tha or equal to
console.log("less tha or equal to test: ", 5 <= 10);
// Tests using "and"  operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
// test using "or" operator
console.log("or operator test: ", 5 === 5 || false);
// test wether an item in aarray
const fruits = ['Nashpati', 'Banana', 'Amrood'];
console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
// Test whether an item is not in array
console.log('Testing "Apple" is not array: ', !fruits.includes("Apple"));
