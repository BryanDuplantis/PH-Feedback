//require PostgreSQL
var pg = require("pg");

//connect to 'customers' database on PostgreSQL
var conString = "postgres://localhost:5432/customers";

var client = new pg.Client(conString);
client.connect();

//drops table if exists
//client.query("DROP TABLE IF EXISTS cstmrs");

//creates table & inserts 5 records into it
//client.query("CREATE TABLE IF NOT EXISTS cstmrs(firstname varchar(64), lastname varchar(64))");
//client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Bryan', 'Duplantis']);
//client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Ed', 'Bush']);
//client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Zoe', 'Ames']);
//client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Bob', 'Paterno']);
//client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Jeff', 'Cunningham']);

// var query = client.query("SELECT firstname, lastname FROM cstmrs ORDER BY lastname, firstname");
// query.on('row', function (row, result) {
//     result.addRow(row);
//     console.log(row);
// });
// //On 'end' JSONify and write results to console
// query.on('end', function (result) {
//     //console.log(JSON.stringify(result.rows, null, "    "));
//     client.end();
// });

function Customer() {
}

Customer.find = function(callback) {
    var query = client.query("SELECT firstname, lastname FROM cstmrs ORDER BY lastname, firstname");

    // Not sure why this is here, no sure if needed?
    query.on('row', function (row, result) {
        result.addRow(row);
    });

    query.on('end', function (result) {
        // This will get result.rows back to your view
        callback(result.rows);
        //client.end();
    });
};

module.exports = Customer;
