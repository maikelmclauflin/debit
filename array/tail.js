module.exports = drop;
var slice = require('./slice');
var defaultTo1 = require('./utils/default-to/1');

function drop(array, _n) {
    return slice(array, defaultTo1(_n));
}