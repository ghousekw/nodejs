// basic functionality of require function is that it reads a JS file, execute the file, and then proceed to return an object.
var http = require('http');

// 'createServer' function is called whenever a request is made to our server application.
// after receiving a request, we are asking our function to return a 'Hello world' response to a client.
http.createServer(function (req, res){
    // 'writeHead' function is used to send header data to the client
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 'end' function will close the connection to the client.
    res.end('Hello world');
    //we are using 'listen' function to make our server application listen to client requests on port 8080
}).listen(8080);