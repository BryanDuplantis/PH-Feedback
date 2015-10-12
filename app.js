var express     = require('express');
var app         = express();
var router      = express.Router();
var bodyParser  = require('body-parser');
var hello       = require('./routes/hello');
var customers   = require('./routes/customers');

//require controllers
var customer = require('./controllers/clients');

app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({'extended':'false'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

//routes
app.get('/', hello)
app.get('/customers', customer.getCustomers);

//initializing a port
var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The magic is happening at http://%s:%d', host, port);

});
