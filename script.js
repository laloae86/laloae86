let selectedPhrase = "feliz día del programador".toLowerCase();
let remainingGuesses = 6;
let guessedLetters = [];
let wordDisplay = selectedPhrase.split('').map(char => (char === ' ' ? ' ' : '_'));

function updateDisplay() {
    document.getElementById("wordDisplay").innerText = wordDisplay.join(' ');
    document.getElementById("hangman").innerText = `Intentos restantes: ${remainingGuesses}`;
    if (remainingGuesses === 0) {
        document.getElementById("message").innerText = "¡Has perdido!";
    } else if (!wordDisplay.includes('_')) {
        document.getElementById("message").innerText = "¡Has ganado!";
        launchConfetti();
        document.getElementById("congratulations").classList.remove('hidden');
    }
}

function guessLetter() {
    let input = document.getElementById("guessInput").value.toLowerCase();
    document.getElementById("guessInput").value = "";
    if (input.length === 1 && /^[a-záéíóúñ]$/.test(input)) {
        if (guessedLetters.includes(input)) {
            document.getElementById("message").innerText = "Ya adivinaste esa letra.";
        } else {
            guessedLetters.push(input);
            if (selectedPhrase.includes(input)) {
                for (let i = 0; i < selectedPhrase.length; i++) {
                    if (selectedPhrase[i] === input) {
                        wordDisplay[i] = input;
                    }
                }
            } else {
                remainingGuesses--;
            }
            document.getElementById("message").innerText = "";
        }
    } else {
        document.getElementById("message").innerText = "Introduce una letra válida.";
    }
    updateDisplay();
}

function restartGame() {
    remainingGuesses = 6;
    guessedLetters = [];
    wordDisplay = selectedPhrase.split('').map(char => (char === ' ' ? ' ' : '_'));
    document.getElementById("message").innerText = "";
    document.getElementById("congratulations").classList.add('hidden');
    updateDisplay();
}

function launchConfetti() {
    // Aquí puedes agregar la lógica para lanzar confeti
    document.querySelector('.confetti').innerHTML = '🎉🎊🎉🎊🎉🎊';
}

window.onload = updateDisplay;
