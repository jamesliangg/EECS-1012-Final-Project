var currentLives = 9;
var score = 0;
var generatedNumber = Math.ceil(Math.random()*10);
const emoji = "♥️";

for(i=0;i<currentLives;i++){
    let livesDisplay = livesDisplay + emoji;
}

function checkNumber(guess) {
    guess = document.getElementById("guess").value;
    console.log(guess);
    console.log("Generated Number " + generatedNumber);

   if (guess == generatedNumber) {
    score++;
    console.log("correct!")
    document.getElementById("decision").innerHTML = "correct!";
    // console.log("Current Score: " + score);
    document.getElementById("score").innerHTML = "Current Score: " + score;
    //document.getElementById("lives").innerHTML = "Current Lives: " + currentLives;
    document.getElementById("lives").innerHTML = livesDisplay;
    document.getElementById("hint").innerHTML = "I've generated a new number, guess this one";
    replaceDropDown();
    generatedNumber = Math.ceil(Math.random()*10);
    // console.log("Generated new number");
   } 
   else {
    currentLives--;
    livesDisplay = "";
    for(i=0;i<currentLives;i++){
        livesDisplay = livesDisplay + emoji;
    }
    console.log("incorrect!");
    document.getElementById("decision").innerHTML = "incorrect!";
    document.getElementById("score").innerHTML = "Current Score: " + score;
    // console.log("Current Lives: " +currentLives);
    //document.getElementById("lives").innerHTML = "Current Lives: " + currentLives;
    document.getElementById("lives").innerHTML = livesDisplay;
    if (guess > generatedNumber) {
        // console.log("My number is less than " + guess);
        document.getElementById("hint").innerHTML = "My number is less than " + guess;
    }
    else {
        // console.log("My number is greater than " + guess);
        document.getElementById("hint").innerHTML = "My number is greater than " + guess;
    }
    document.getElementById("guess").remove(document.getElementById("guess").selectedIndex);
    if (currentLives <= 0) {
        console.log("death");
        document.getElementById("hint").innerHTML = "You died, my guess was " + generatedNumber;
        document.getElementById("guessButton").disabled = true;
    }
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