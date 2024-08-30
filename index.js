// Importing and re-exporting modules from different packages
const { greet } = require('./packages/my-first-package/dist');

module.exports = {
  greet
};
