
// Make sure your comparison insensitive.
// If 'John' has been used, 'John' should be not be accepted

let current_users: string[] = ['IrFan','DaNiyal','SalMan','John'];

let new_users: string[] = ['Bilal','IrFan','Dawood','Jameel','Hamza'];

new_users.forEach(newUsername => {
let lowerCase: string = newUsername.toLowerCase();

if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
console.log(`The username ${newUsername} is not available.please write a different username`)
}
else{
    console.log(`The username ${newUsername} is available.`);
}

});