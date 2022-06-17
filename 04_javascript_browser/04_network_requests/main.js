// XMLHttpRequest:
const request = new XMLHttpRequest();
request.addEventListener("load", function reqListener() {
  console.log(this.responseText);
});
request.open("GET", "http://quotes.stormconsultancy.co.uk/random.json");
request.send();


/**
 * Exercise: create a function that requests a quote
 * from the server.
 * Question: when you call this function, how can you get result?
 */

function requestQuote() {
  // implementation...
}







// Callback example:
function waitWithCallback(callback) {
  setTimeout(function() {
    callback("Result");
  }, 1000);
}

waitWithCallback(function(result) {
  console.log(result);
});



// What if we want to request a second quote
// as soon as the first quote is loaded?
// What if the third one after the second and so on?






// Promise example:
function waitWithPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Result");
    }, 1000);
  })
}

waitWithPromise()
    .then(result => console.log(result));




/**
 * Exercise:
 * Change implementation of requestQuote function
 * to use promises.
 *
 *
 *
 * Exercise:
 * Now try to load 3 quotes sequentially, so that
 * second loads after the first, and third after
 * the second.
 *
 */


function getQuote() {
  // implementation...
}



// Combining promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods

Promise.all([getQuote(), getQuote()])
    .then((values) => {
      console.log(values);
    });

Promise.any([getQuote(), getQuote()])
    .then((values) => {
      console.log(values);
    });





// Fetch API:
fetch('http://quotes.stormconsultancy.co.uk/random.json')
    .then(response => response.json())
    .then(response => console.log(response));


/**
 * Practice: finish quotes application
 */
