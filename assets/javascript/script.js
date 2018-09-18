// Create an array of names
var randomNamesArr = ["Ana", "Pearl", "Esen", "Cindy", "Undral", "Oyunbaatar", "Urjinbadam"];
//Choose names randomly
var randomNum = Math.floor(Math.random()* randomNamesArr.length);
var rightWord = [];
var wrongWord = [];
var underScore = [];
var chosenName = randomNamesArr[randomNum];

//DOM mnupilation

var underScoreDom = document.getElementsByClassName("underscore");
var rightGuessesDom = document.getElementsByClassName("rightGuess");
var wrongGuessesDom = document.getElementsByClassName("wrongGuess");

//Create underscores based on length of word
var generateUnderScore = () => {
    for (var i=0; i<chosenName.length; i++){
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderScore());
//Get users guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
//if users guess is right
    if(chosenName.indexOf(keyWord) > -1){
        //If right push to right array
        rightWord.push(keyWord);
        underScoreDom[0].innerHTML = underScore.join(' ');
        rightGuessesDom[0].innerHTML = rightWord;
        underScore[chosenName.indexOf(keyWord)] = keyWord;
        if(underScore.join(' ') === chosenName){
            alert("You Win");
        }
    }
    else{
        //If wrong push to wrong array
        wrongWord.push(keyWord);
        wrongGuessesDom[0].innerHTML = wrongWord;
    }
});
underScoreDom[0].innerHTML = generateUnderScore().join(' ');
