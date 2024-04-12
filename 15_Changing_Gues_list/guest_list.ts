let guest_list :string[] = ['Imran khan','Nawaz sharif','Asif zardari'];

for (let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' +guest_list[i] + ',\n\nIt is our pleasure to invite youin our party.\n\nThank You!\n\n')
    
}

let absent_guest :string ='Imran khan' ;

let new_guest : string = 'kamran tessori' ;

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n')

}

console.log(`Mr. ${absent_guest} is not comming to party.`)