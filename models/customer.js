//require PostgreSQL
var pg = require("pg");

//connect to 'customers' database on PostgreSQL
var conString = "postgres://localhost:5432/customers";

var client = new pg.Client(conString);
client.connect();

function Customer() {}

Customer.find = function(callback) {
    var query = client.query("SELECT firstname, lastname FROM clients ORDER BY lastname, firstname");

    query.on('row', function (row, result) {
        result.addRow(row);
    });

    query.on('end', function (result) {

        callback(JSON.stringify(result.rows));
        //client.end();
    });
};

module.exports = Customer;
