"use strict";
//   Print a generic greting, such  a hello Eric, thank you  for logging in again
const userNames = ['admin', 'Bugs Bunny', 'Daffy DUCK', 'Sylvester', 'Tweety'];
userNames.forEach(userNames => {
    if (userNames === 'admin') {
        console.log('Hellow admin, would you like to use a status report?');
    }
    else {
        console.log(`Hello ${userNames}, thank you for logging in again.`);
    }
});
