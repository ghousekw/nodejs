// we are using require function to include express module.
var express = require('express');

// before we use express module, we need to make an object of the express module.
var app = express();

// we are creating a callback function, so that it will be called whenever anybody browses to the root of our web application. 
// the callback function will be used to send the string "Hello World"
// app.get('/', function(req, res){

//     // res parameter is used to send content back to the web page.
//     res.send('Hello world');
// });

// we are then using the listen to function to make our application 
var server=app.listen(3000, function(){});

// we are defining a route if the URL http://localhost:3000/Node is selected in the browser. To the route we are attaching a callback function which will be called when we browse to the Node URL.
app.route('/Node').get(function(req, res)
{
    // we are using the send function to send the string "Tutorial on Node"
    res.send("Tutorial on Node");
});

// we are defining a route if the URL "http://localhost:3000/Angular" is selected in the browser. to the route, we are attaching a callback function which will be called when we browse to the angular URL.
app.route('/Angular').get(function(req, res)
{
    // we are using send function to send the string "Tutorial on Angular".
    res.send("Tutorial on Angular");
});

// this is the default route which is choosen when one browses to the route of the application "http://localhost:3000", which will display the message "Welcome to tutorials".
app.get('/', function(req, res)
{
    res.send("Welcome to Tutorials");
});
