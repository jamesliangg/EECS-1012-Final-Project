var url = "http://localhost:3000/post";
var userName = "John Smith";
var currentLives = 9;
var score = 0;
const emoji = "♥️";
var livesDisplay = "♥️♥️♥️♥️♥️♥️♥️♥️♥️"

window.onload = function() {
    userName = prompt('What is your name?', '');
    initializeNumber();
    console.log("I loaded onload!")
}

function initializeNumber() {
    $.post(url+'?data='+JSON.stringify({
        'name': userName,
        'action': 'generateNumber'
    }), response)
    console.log("Sent initialization!");
}

function sendGuess() {
    guess = document.getElementById("guess").value;
    $.post(
        url+'?data='+JSON.stringify({
            'name': userName,
            'action': 'guess',
            'guess': guess,
            'lives': currentLives
        }), response
    );
}

function restart() {
    currentLives = 9;
    score = 0;
    livesDisplay = "♥️♥️♥️♥️♥️♥️♥️♥️♥️"
    initializeNumber();
    replaceDropDown();
    document.getElementById("restartButton").disabled = true;
    document.getElementById("guessButton").disabled = false;
    document.getElementById("score").innerHTML = "Current Score: " + score;
    document.getElementById("lives").innerHTML = livesDisplay;
    document.getElementById("decision").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    document.getElementById("restartButton").setAttribute("hidden", "hidden");
}

function response(data, status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'generateNumber') {
        userName = response['nameId'];
        console.log(userName);
    }
    else if (response['action'] == 'guess') {
        if (response['result']) {
            correctGuess();
        }
        else {
            wrongGuess(response['difference'], response['number']);
        }
    }
}

function correctGuess() {
    score++;
    console.log("correct!");
    document.getElementById("decision").innerHTML = "correct!";
    document.getElementById("score").innerHTML = "Current Score: " + score;
    document.getElementById("lives").innerHTML = livesDisplay;
    document.getElementById("hint").innerHTML = "Your guess was correct! Guess my new number.";
    replaceDropDown();
    initializeNumber();
    return score;
}

function wrongGuess(difference, actualNumber) {
    currentLives--;
    livesDisplay = livesDisplay.substring(0, livesDisplay.length - 2);
    console.log("incorrect!");
    document.getElementById("decision").innerHTML = "incorrect!";
    document.getElementById("score").innerHTML = "Current Score: " + score;
    document.getElementById("lives").innerHTML = livesDisplay;
    if (difference == 'less') {
        document.getElementById("hint").innerHTML = "Hint: My number is less than " + guess;
    }
    else {
        document.getElementById("hint").innerHTML = "Hint: My number is greater than " + guess;
    }
    document.getElementById("guess").remove(document.getElementById("guess").selectedIndex);
    if (currentLives <= 0) {
        console.log("death");
        document.getElementById("hint").innerHTML = "You died, my number was " + actualNumber;
        document.getElementById("guessButton").disabled = true;
        document.getElementById("restartButton").disabled = false;
        document.getElementById("restartButton").removeAttribute("hidden");
        return "death";
    }
    return currentLives;
}

function replaceDropDown() {
    var dropdownElement = document.getElementById("guess");
    var length = dropdownElement.options.length - 1;
    for(var i = length; i >= 0; i--) {
        dropdownElement.remove(i);
    }
    for (var i = 1; i < 11; i++) {
        console.log(i);
        var option = document.createElement("option");
        option.text = i;
        dropdownElement.add(option);
    }
}