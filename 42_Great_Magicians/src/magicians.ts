// Great Magicians: Make a array of magicians names. pass the array to a function called show magicians(),
let magician : string[] = ['Harry potter', 'Hermione Granger', 'Ron weasley','Albus Dumledore']


function  make_great(magicianArry:string[] ){

   for(let i=0; i<magicianArry.length; i++){

    magician[i] = 'the Great' + magicianArry[i]
   }
}


function show_magicians(magicians: string[]){

    magicians.forEach( element => {
        console.log(element)
   
    }); 
}

make_great(magician);
show_magicians(magician);