

// Create a variable called alien_color
let alien_color :string = 'green';

// write an if statement to test whether the alien'scolor is green. if it is, 
// print a message that the player just earned 5 point
if(alien_color === 'green'){
    console.log("Player just earned 5 points !")
}


// Write one version of this program that passes the if test and another that fails.
alien_color = 'yellow';

// The version that fails will have no output.
if(alien_color === 'green'){
    console.log("Player just earned 5 points !")
}