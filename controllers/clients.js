var Customer = require('../models/customer');

exports.getCustomers = function(req, res) {
  Customer.find(function (clients) {
    res.send(clients);
  });
};
