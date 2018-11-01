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
	"pearl",
	"andy",
	"angelo",
	"brett",
	"katie",
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
	var textbox = document.getElementById('my-input');
    textbox.select();
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
		play();
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

var play = function () {

	if (currentWord === "rich") {
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/youcandoit.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars1.githubusercontent.com/u/42152762?s=200&v=4'  alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	} 
	else if (currentWord === "elizabeth"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/2.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars1.githubusercontent.com/u/42365244?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "magaly"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/focus.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars2.githubusercontent.com/u/25308742?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "joyce"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/thinking.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars2.githubusercontent.com/u/25308742?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "andrew"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/icantbelieve.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars2.githubusercontent.com/u/32251290?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "ashley"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/3.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/38448889?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "ryan"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/woohoo.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars0.githubusercontent.com/u/38480369?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "abigal"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/hey-sweetness-1.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars0.githubusercontent.com/u/41799687?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "jason"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/gotit1.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/40837639?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "isaac"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/im-the-man.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/727268?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "pearl"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/its-almost-time.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars0.githubusercontent.com/u/39831295?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "andy"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/gotit2.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars1.githubusercontent.com/u/10361698?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "angelo"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/powerful.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/727268?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "brett"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/1.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/727268?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "katie"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/okay-well.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars3.githubusercontent.com/u/38897241?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
	else if (currentWord === "tyler"){
		var audio = "<audio autoplay = 'autoplay' >" + "<source src='assets/audio/nice-work.wav' type='audio/mpeg'></audio>";
		document.querySelector("#audio").innerHTML = audio;
		var picture = "<img src='https://avatars2.githubusercontent.com/u/42359367?s=200&v=4' alt=''>";
		document.querySelector("#picture").innerHTML = picture;
		start();
	}
}