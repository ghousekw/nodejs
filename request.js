// here we are using the require module, to make GET request to websites
var request = require('request');

// we are making a GET request to www.google.com and subsequently calling a function when a response is recieved.
// Here we use three parameters error, response and body
    // error is used when any error received by using the GET request, this will be recorded here.
    // response will have the http headers which are sent back back in the reponse.
    // body will contain the entire content of the response sent by Google.
request("http://www.google.com", function(error, response, body)
    {
        // displaying the content in console
        console.log(body);
});