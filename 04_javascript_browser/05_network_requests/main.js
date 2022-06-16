
// XMLHttpRequest:
const request = new XMLHttpRequest();
request.addEventListener("load", function reqListener() {
    console.log(this.responseText);
});
request.open("GET", "http://quotes.stormconsultancy.co.uk/random.json");
request.send();




// Fetch API:
fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(response => response.json())
    .then(response => console.log(response));


/**
 * Practice: finish quotes application
 */
