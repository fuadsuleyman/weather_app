const chalk = require('chalk');

const success = chalk.bold.green.inverse;
const error = chalk.bold.red.inverse;
const warning = chalk.keyword('orange');

module.exports = {
    'success': success,
    'error': error,
    'warning': warning
}