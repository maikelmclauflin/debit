module.exports = lastIs;
var lastIndex = require('./index/last');
var nthIs = require('./nth-is');

function lastIs(array, final) {
    return nthIs(array, final, lastIndex(array));
}