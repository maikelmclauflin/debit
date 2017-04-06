module.exports = possibleIndex;
var MAX_ARRAY_INDEX = require('./utils/number/max-array-index');
var clamp = require('./utils/number/clamp');

function possibleIndex(n) {
    return clamp(n, 0, MAX_ARRAY_INDEX);
}