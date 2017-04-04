module.exports = last;
var lastIndex = require('./utils/array/index/last');
var nth = require('./utils/array/nth');

function last(array) {
    return nth(array, lastIndex(array));
}