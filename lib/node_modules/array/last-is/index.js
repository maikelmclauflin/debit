module.exports = lastIs;
var lastIndex = require('array/index/last');
var nthIs = require('array/nth-is');

function lastIs(array, final) {
    return nthIs(array, final, lastIndex(array));
}