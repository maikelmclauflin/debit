module.exports = split;
var toString = require('./utils/to/string');
var defaultTo = require('./utils/default-to');

function split(string, delimiter) {
    return toString(string).split(defaultTo(delimiter, ''));
}