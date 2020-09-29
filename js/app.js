// Get the elements needed from HTML

document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const start = document.querySelector('.btn__reset');
    const overlay = document.getElementById('overlay');

    let missed = 0; // If the player guesses wrong 5 times game over.

    const phrases = [
        "Dog's dinner",
        "Fish out of water",
        "Chip off the old block",
        "Bob's your uncle",
        "Fruits of your loins"
    ];

    function getRandomPhrasesArray(arr){
        let randomNumber = Math.floor(Math.random() * arr.length);
        let randomPhrase = arr[randomNumber].split("");
        return randomPhrase;
    }

    function addPhraseToDisplay(arr){

    }

    const phraseArray = getRandomPhrasesArray(phrases);

    addPhraseToDisplay(phraseArray);

    start.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

});