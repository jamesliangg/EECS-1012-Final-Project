var numbers = {};
var score = 0;
var currentLives = 9;

function generateNumber(clientName) {
    var generatedNumber = Math.ceil(Math.random()*10);
    numbers[clientName] = generatedNumber;
    console.log(numbers);
    console.log(generatedNumber);
    return generatedNumber;
}

function correctGuess() {
    score++;
    console.log("correct!");
    // document.getElementById("decision").innerHTML = "correct!";
    // document.getElementById("score").innerHTML = "Current Score: " + score;
    // document.getElementById("lives").innerHTML = livesDisplay;
    // document.getElementById("hint").innerHTML = "Your guess was correct! Guess my new number.";
    // replaceDropDown();
    // initializeNumber();
    return score;
}

function wrongGuess(difference, actualNumber) {
    currentLives--;
    // livesDisplay = livesDisplay.substring(0, livesDisplay.length - 2);
    console.log("incorrect!");
    // document.getElementById("decision").innerHTML = "incorrect!";
    // document.getElementById("score").innerHTML = "Current Score: " + score;
    // document.getElementById("lives").innerHTML = livesDisplay;
    if (difference == 'less') {
        // document.getElementById("hint").innerHTML = "Hint: My number is less than " + guess;
    }
    else {
        // document.getElementById("hint").innerHTML = "Hint: My number is greater than " + guess;
    }
    // document.getElementById("guess").remove(document.getElementById("guess").selectedIndex);
    if (currentLives <= 0) {
        console.log("death");
        // document.getElementById("hint").innerHTML = "You died, my number was " + actualNumber;
        // document.getElementById("guessButton").disabled = true;
        // document.getElementById("restartButton").disabled = false;
        // document.getElementById("restartButton").removeAttribute("hidden");
        return "death";
    }
    return currentLives;
}