let guest_list :string[] = ['Imran khan','Nawaz sharif','Asif zardari'];

// for (let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' +guest_list[i] + ',\n\nIt is our pleasure to invite youin our party.\n\nThank You!\n\n')
    
// }

let absent_guest :string ='Imran khan' ;

let new_guest : string = 'kamran tessori' ;

guest_list[0] = new_guest ;

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n')

// }
console.log(`Mr. ${absent_guest} is not comming to party.`);

console.log('Good News! we find Big Table so we are inviting 3 more guest.')

guest_list.unshift('sir zia khan');
guest_list.splice(2 , 0 , 'Maryam nawaz');
guest_list.push('Bilawal Butto');


for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nthank you!\n\n')
}
console.log('\nsory we can not arrange big table, only two people will be invited.');

while(guest_list.length > 2){
let remove_guest = guest_list.pop();
console.log(`sorry Mr. ${remove_guest}, you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')
}

guest_list.splice(0,2);
console.log(guest_list);