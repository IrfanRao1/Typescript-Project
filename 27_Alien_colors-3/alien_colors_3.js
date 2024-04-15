"use strict";
// Alien colors #3: turn your if-else chain from excercise 5-4 into an if-else
let alienColors = "green";
// if the alien is green, print a message that the player earned 5 points.
// if the alien is yello, print a message that the player earned 10 points.
// if the alien is red, print a message that the player earned 15 points.
//  Version 1 of the program
if (alienColors === "green") {
    console.log("Version 1:player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
// Version 2 of the program
alienColors = "yello";
if (alienColors === "green") {
    console.log("Version 2: player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
// Version 3 of the program
alienColors = "red";
if (alienColors === "green") {
    console.log("Version 3: player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("Version 2: player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("Please select right color");
}
