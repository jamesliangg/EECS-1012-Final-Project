const { json } = require('express');
var express  = require('express');
var app = express();
var port = 3000;
var idCounter = 0;
var numbers = {};

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var requestInfo = JSON.parse(req.query['data']);
    
    if (requestInfo['action'].includes('generateNumber')) {
        idCounter++;
        var nameId = requestInfo['name'] + idCounter;
        generateNumber(nameId);
        var jsontext = JSON.stringify({
            'action': 'generateNumber',
            'nameId': nameId,
            'message': 'I have generated a number!'
        });
        res.send(jsontext);
    }
    else if (requestInfo['action'].includes('guess')) {
        var result = evaluateGuess(requestInfo['name'], requestInfo['guess']);
        var jsontext = JSON.stringify({
            'action': 'guess',
            'result': result
        });
        res.send(jsontext);
    }
}).listen(3000);
console.log("Server is running! (listening on http://localhost:" + port + ")");

function generateNumber(clientName) {
    generatedNumber = Math.ceil(Math.random()*10);
    numbers[clientName] = generatedNumber;
    console.log(numbers);
    console.log(generatedNumber);
}

function evaluateGuess(client, guess) {
    console.log(client);
    console.log(numbers[client]);
    console.log(guess);
    return numbers[client] == guess;
}