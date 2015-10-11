//require PostgreSQL
var pg = require("pg");

//connect to 'customers' database on PostgreSQL
var conString = "postgres://localhost:5432/customers";

var client = new pg.Client(conString);
client.connect();

//creates table & inserts 4 records into it
client.query("CREATE TABLE IF NOT EXISTS cstmrs(firstname varchar(64), lastname varchar(64))");
client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Bryan', 'Duplantis']);
client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Ed', 'Bush']);
client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Zoe', 'Ames']);
client.query("INSERT INTO cstmrs(firstname, lastname) values($1, $2)", ['Bob', 'Paterno']);

var query = client.query("SELECT firstname, lastname FROM cstmrs ORDER BY lastname, firstname");
query.on("row", function (row, result) {
    result.addRow(row);
});
//On 'end' JSONify and write results to console
query.on("end", function (result) {
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});
