// Get the elements needed from HTML

document.addEventListener('DOMContentLoaded', () => {
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    const start = document.getElementById('btn_reset');
    const overlay = document.getElementById('overlay');

    let missed = 0; // If the player guesses wrong 5 times game over.

    start.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

});