// we are using require function to include express module.
var express = require('express');

// before we use express module, we need to make an object of the express module.
var app = express();

// we are creating a callback function, so that it will be called whenever anybody browses to the root of our web application. 
// the callback function will be used to send the string "Hello World"
app.get('/', function(req, res){

    // res parameter is used to send content back to the web page.
    res.send('Hello world');
});

// we are then using the listen to function to make our application 
var server=app.listen(3000, function(){});