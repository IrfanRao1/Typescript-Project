"use strict";
// Remove all of the usernames from your array, and make sure the correct message is printed
let userNames = ['admin', 'Junaid', 'Zeeshan', 'Kamran', 'Damial'];
if (userNames.length === 0) {
    console.log('we need to find some users!');
}
else {
    userNames = [];
    console.log('All user Names have been removed. ' + userNames.length);
}
