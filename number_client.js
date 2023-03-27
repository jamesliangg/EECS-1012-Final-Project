var url = "http://localhost:3000/post";
var userName = "John Smith";

window.onload = function() {
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

function response(data, status) {
    var response = JSON.parse(data);
    console.log(data);
}