var express  = require('express');
var app = express();
var port = 3000;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("New express client");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var requestInfo = JSON.parse(req.query['data']);
    
    var jsontext = JSON.stringify({
        'test': 'hello!',
        'requestedAction': requestInfo['action']
    })
    
    res.send(jsontext);
}).listen(3000);
console.log("Server is running! (listening on http://localhost: " + port + ")");