var url = "http://localhost:3000/post";
var userName = "John Smith";
var currentLives = 9;
var score = 0;
const emoji = "♥️";

// for(i=0;i<currentLives;i++){
//     let livesDisplay = livesDisplay + emoji;
// }

window.onload = function() {
    userName = prompt('What is your name?', '');
    // initializeNumber();
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
    // document.getElementById("lives").innerHTML = livesDisplay;
    document.getElementById("hint").innerHTML = "I've generated a new number, guess this one";
    replaceDropDown();
    initializeNumber();
}

function wrongGuess(difference, actualNumber) {
    currentLives--;
    // for(i=0;i<currentLives;i++){
    //     livesDisplay = livesDisplay + emoji;
    // }
    console.log("incorrect!");
    document.getElementById("decision").innerHTML = "incorrect!";
    document.getElementById("score").innerHTML = "Current Score: " + score;
    // document.getElementById("lives").innerHTML = livesDisplay;
    if (difference == 'less') {
        document.getElementById("hint").innerHTML = "My number is less than " + guess;
    }
    else {
        document.getElementById("hint").innerHTML = "My number is greater than " + guess;
    }
    document.getElementById("guess").remove(document.getElementById("guess").selectedIndex);
    if (currentLives <= 0) {
        console.log("death");
        document.getElementById("hint").innerHTML = "You died, my number was " + actualNumber;
        document.getElementById("guessButton").disabled = true;
    }
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