// npm requires
var express     = require('express');
var app         = express(); // create app with Express

//handle request and response
app.get("/", function(req, res) {
    res.send({name:"Hello world, is this you? It's me, Bryan."});
});

//initializing a port
var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The magic is happening at http://%s:%d', host, port);
});
