// Callback example:
function waitWithCallback(callback) {
    setTimeout(function() {
        callback("Result");
    }, 100);
}

waitWithCallback(function(result) {
   console.log(result);
});





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
 * Task:
 * Create 3 buttons and show an alert once a user
 * clicks each of them at least once.
 */
