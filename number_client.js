var url = "http://localhost:3000/post";
var userName = "John Smith";

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
            'guess': guess
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
}