// Add DOMContentLoaded event handler.

document.addEventListener('DOMContentLoaded', () => {
    // Get the elements needed from HTML
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const start = document.querySelector('.btn__reset');
    const overlay = document.getElementById('overlay');
    const ul = document.querySelector('#phrase ul');

    let missed = 0; // If the player guesses wrong 5 times game over.

    const phrases = [
        "Dogs dinner",
        "Fish out of water",
        "Chip off the old block",
        "Bob is your uncle",
        "Fruits of your loins"
    ];

    // Gets a random phrase

    function getRandomPhrasesArray(arr){
        let randomNumber = Math.floor(Math.random() * arr.length);
        let randomPhrase = arr[randomNumber].split("");
        return randomPhrase;
    }

    // Adds letters from phrases to display

    function addPhraseToDisplay(arr){
        for (let i = 0; i < arr.length; i++) {
            const li = document.createElement('li');
            li.textContent = arr[i];
            ul.appendChild(li);

            if (arr[i] !== ' ') {
                li.classList.add('letter');
            } else {
                li.classList.add('space');
            }
        }
    }

    const phraseArray = getRandomPhrasesArray(phrases);

    addPhraseToDisplay(phraseArray);

    // Function checks if a letter is in the phrase

    const checkLetter= btn => {
        let phraseItem = ul.children;
        let correct = null;

        for (let i = 0; i < phraseItem.length; i++) {
            const character = phraseItem[i].textContent.toLowerCase();

            if (btn.textContent === character){
                phraseItem[i].classList.add('show');
                correct = true;
            }
        }
        return correct;
    }

    checkLetter(qwerty);
    
    //Event handler listening for the in game keyboard clicks 

    qwerty.addEventListener('click', e => {
        const select = e.target;
        if (select.tagName === 'BUTTON') {
            select.classList.add('chosen');
            select.setAttribute('disabled', true);

            const matched = checkLetter(select);

            if (!matched) {
                const numberOfTries = document.querySelectorAll('.tries');
                numberOfTries[missed].style.display = 'none';
                missed++;
            }
            if (select) {
                return checkWin(select);
            }
        }
    });

    // Function to check if game has been won or lost

    const checkWin = () => {
        const letter = ul.getElementsByClassName('letter');
        const show = ul.getElementsByClassName('show');

        if (letter.length === show.length){
            overlay.classList.add('win');
            overlay.querySelector('h2').textContent = "Congratulations! You've won!";
            overlay.style.display = 'flex';
        }
        if ( missed > 4) {
            overlay.classList.add('lose');
            overlay.querySelector('h2').textContent = "Oops that's the wrong answer, you lose! Better luck next time :)";
            overlay.style.display = 'flex';
            overlay.querySelector('a').textContent = 'Play Again?';
            resetGame();
        }
    }

    function resetGame() {
        let keyboard = document.querySelectorAll('.keyrow button');

        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].className = '';
            keyboard[i].disabled = false;
        }

        ul.innerHTML = '';
        addPhraseToDisplay(getRandomPhrasesArray(phrases));

        const heart = document.getElementsByTagName('img');
        for (let i = 0; i < heart.length; i++) {
            let tries = document.querySelectorAll('.tries');
            tries[i].style.display = 'inline';
        }

        missed = 0;
    }

    // Event handler to listen for the click of the start button.

    start.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

});