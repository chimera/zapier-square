const authentication = require('./authentication');
const newTransactionTrigger = require('./triggers/new_transaction.js');
const getLocationsTrigger = require('./triggers/get_locations.js');
const newOrderTrigger = require('./triggers/new_order.js');
const getCustomerSearch = require('./searches/get_customer.js');

module.exports = {
  platformVersion: require('zapier-platform-core').version,
  searches: { [getCustomerSearch.key]: getCustomerSearch },
  authentication: authentication,
  version: require('./package.json').version,
  triggers: {
    [newTransactionTrigger.key]: newTransactionTrigger,
    [getLocationsTrigger.key]: getLocationsTrigger,
    [newOrderTrigger.key]: newOrderTrigger,
  },
};
