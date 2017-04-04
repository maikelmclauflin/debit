module.exports = join;
var toArray = require('./utils/to/array');
var defaultTo = require('./utils/default-to');

function join(array, delimiter) {
    return toArray(array).join(defaultTo(delimiter, ','));
}