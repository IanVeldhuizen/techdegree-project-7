

//  Get the element with the ID of qwerty and save it to a variable.
const keyboard = document.getElementById('qwerty');
//  Get the element with the ID of phrase and save it to a variable.
let myPhrase = document.getElementById('phrase');
//  Create a missed variable, initialized to 0, that you’ll use later to keep track of the number of guesses the player has missed  
//  (remember, if the player guesses wrong 5 times, they lose the game).
let guessCount = 0;
//  Attach a event listener to the “Start Game” button to hide the start screen overlay.

const startGame = document.querySelector('.btn__reset');

startGame.addEventListener('click', (event)=> {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// Create a phrases array that contains at least 5 different phrases as strings.
// Make sure that each phrase contains only letters and spaces, 
// so players won’t need to guess punctuation or special characters.
    


