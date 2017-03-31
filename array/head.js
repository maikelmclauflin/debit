module.exports = dropRight;
var slice = require('./utils/array/slice');
var defaultTo = require('./utils/default-to/');

function dropRight(array, _n) {
    return slice(array, 0, defaultTo(_n, array.length - 1));
}