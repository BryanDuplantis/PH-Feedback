//require PostgreSQL
var pg = require("pg");

//connect to 'customers' database on PostgreSQL
var conString = "postgres://localhost:5432/customers";

var client = new pg.Client(conString);
client.connect();

//drops table if exists (included so as to demonstrate how to drop a table; not useful in
//production environment to drop table each time)
client.query("DROP TABLE IF EXISTS clients");

//creates clients table & inserts 7 records into it
client.query("CREATE TABLE IF NOT EXISTS clients(clientid INT, firstname varchar(64), lastname varchar(64))");
client.query("INSERT INTO clients(clientid, firstname, lastname) values(1, $1, $2)", ['Bryan', 'Duplantis']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(2, $1, $2)", ['Ed', 'Bush']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(3, $1, $2)", ['Zoe', 'Ames']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(4, $1, $2)", ['Bob', 'Paterno']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(5, $1, $2)", ['Steve', 'Joubert']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(6, $1, $2)", ['Jeff', 'Cunningham']);
client.query("INSERT INTO clients(clientid, firstname, lastname) values(7, $1, $2)", ['Bradley', 'Stewart']);

client.query("DROP TABLE IF EXISTS stakeholders");

//creates stakeholders table & inserts 7 records into it
client.query("CREATE TABLE IF NOT EXISTS stakeholders(stakeholderid INT, role varchar(64), contactperson varchar(64))");
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(1, $1, $2)", ['Dev Mgr', 'Stephen Sanders']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(2, $1, $2)", ['HR Mgr', 'Jessica Reed']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(3, $1, $2)", ['Senior Dev', 'Kathleen Rivera']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(4, $1, $2)", ['Jr Dev', 'Jean Ortiz']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(5, $1, $2)", ['QA', 'Amy Fields']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(6, $1, $2)", ['Data Analyst', 'Jennifer Gibson']);
client.query("INSERT INTO stakeholders(stakeholderid, role, contactperson) values(7, $1, $2)", ['Dev Mgr', 'Stephen Gibson']);

client.query("DROP TABLE IF EXISTS products");

//creates products table & inserts 7 records into it
client.query("CREATE TABLE IF NOT EXISTS products(productid INT, productname varchar(64))");
client.query("INSERT INTO products(productid, productname) values(1, $1)", ['Telemedicine']);
client.query("INSERT INTO products(productid, productname) values(2, $1)", ['Vision Care']);
client.query("INSERT INTO products(productid, productname) values(3, $1)", ['Radiology']);
client.query("INSERT INTO products(productid, productname) values(4, $1)", ['Primary Care']);
client.query("INSERT INTO products(productid, productname) values(5, $1)", ['Occupational Health']);
client.query("INSERT INTO products(productid, productname) values(6, $1)", ['Pharmacy']);
client.query("INSERT INTO products(productid, productname) values(7, $1)", ['Fitness Center']);

client.query("DROP TABLE IF EXISTS product_details");

//creates product_details table
client.query("CREATE TABLE IF NOT EXISTS product_details(productid INT, clientid INT, stakeholderid INT)");


function Customer() {}

Customer.find = function(callback) {
    var query = client.query("SELECT clientid, firstname, lastname FROM clients ORDER BY clientID");

    query.on('row', function (row, result) {
        result.addRow(row);
    });

    query.on('end', function (result) {
        callback(JSON.stringify(result.rows));
        //client.end();
    });
};

module.exports = Customer;
