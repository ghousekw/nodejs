// the basic functionality of require is that it reads a js file, executes the file, and then proceeds to return the exports object. So in our case we want to use the http module functionality to get the required functions from the http module so that it can be used in our application.
var http = require('http')

// we are creating a server application by using createServer function which takes request from the server and response to server
var server = http.createServer(function(request, response){
    
    // here with writeHead function we are responding with a header type of '200', this number is used when a successful response is sent to client.
    response.writeHead(200,
        {"content-Type": "text/plain"});
    
    // we are responding with a string 'Hello World' bu using end function
    response.end("Hello World\n");
});

// setting our server application to listen at port 7000
server.listen(7000);