// npm requires
var express     = require('express');
var app         = express(); //create app with Express
var router      = express.Router();
var hello       = require('./routes/hello');

app.set('view engine', 'ejs');

app.use('/', hello)

//initializing a port
var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The magic is happening at http://%s:%d', host, port);
});
