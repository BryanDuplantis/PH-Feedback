var express     = require('express');
var app         = express();
var router      = express.Router();
var bodyParser  = require('body-parser');
var hello       = require('./routes/hello');
var customers   = require('./routes/customers');

//require controllers
var customer = require('./controllers/clients');

app.set('view engine', 'ejs');

//body-parser returns middleware that only parses JSON
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', hello)
app.use('/customers', customers)

//routes
app.get('/customers', customer.getCustomers);

//initializing a port
var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('The magic is happening at http://%s:%d', host, port);

});
