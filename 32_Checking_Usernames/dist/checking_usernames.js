"use strict";
// Make sure your comparison insensitive.
// If 'John' has been used, 'John' should be not be accepted
let current_users = ['IrFan', 'DaNiyal', 'SalMan', 'John'];
let new_users = ['Bilal', 'IrFan', 'Dawood', 'Jameel', 'Hamza'];
new_users.forEach(newUsername => {
    let lowerCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUsername} is not available.please write a different username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
