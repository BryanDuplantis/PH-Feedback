var Customer = require('../models/customer');

exports.getCustomers = function(req, res) {
  Customer.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
    res.send(users);
  });
};
