var express     = require('express');
var app         = express();
var router      = express.Router();
var bodyParser  = require('body-parser');
var hello       = require('./routes/hello');

app.set('view engine', 'ejs');

//body-parser returns middleware that only parses JSON
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', hello)

//initializing a port
var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The magic is happening at http://%s:%d', host, port);
});
