var namesArr = [
	"rich",
	"elizabeth",
	"magaly",
	"joyce",
	"andrew",
	"ashley",
	"ryan",
	"abigal",
	"jason",
	"isaac",
	"adam",
	"bill",
	"angelo",
	"brett",
	"luis",
	"tyler"
	];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var currentWord = "";
var letters = [];
var currentPuzzle = [];
var incorrect = [];
var guess = "";
var wins = 0;
var guessesRemaining = 10;

//Displaying puzzle into HTML
var displayToBrowser = function () {
	document.getElementById("word").innerHTML = currentPuzzle.join(" ");
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guesses").innerHTML = guessesRemaining;
	document.getElementById("letters").innerHTML = incorrect;
}

// Reset game
var reset = function () {
	currentPuzzle = [];
	incorrect = [];
	guessesRemaining = 10;
}

// Computer randomly generates word from names array
var generateWord = function () {
	currentWord = namesArr[Math.floor(Math.random() * namesArr.length)];
	letters = currentWord.split("");
}

// Create Hangman puzzle
var start = function () {
	reset();
	generateWord();

	for (var i = 0; i < letters.length; i++) {

			if (alphabet.indexOf(letters[i]) > -1) {
				currentPuzzle.push("__ ")
			} else {
				currentPuzzle.push(letters[i]);
			}
	}
	displayToBrowser();
}

var checkGuess = function () {
	var correctGuess = false;
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === guess) {
			correctGuess = true;
		}
	}
    // console.log(correctGuess);
    
    if (correctGuess) {
		for (var j = 0; j < currentWord.length; j++) {
			if (currentWord[j] === guess) {
				currentPuzzle[j] = guess;
				document.getElementById("word").innerHTML = currentPuzzle.join(" ");
			}
		}
	} else if (!incorrect.includes(guess) && (alphabet.indexOf(guess) > -1)) {
				incorrect.push(guess);
				guessesRemaining--;
	}

}

var rounds = function () {
	displayToBrowser();
	if (currentPuzzle.join("") === currentWord) {
        wins++;
        // alert("Yeaaaaaaye, you win!!!!!")
		document.getElementById("wins").innerHTML = wins;
	} else if (guessesRemaining === 0) {
		// Restart game
        start();
	}

}

start();
// console.log(currentWord);
document.onkeypress = function(event) {
  guess = event.key;
  checkGuess();
  rounds();
};
