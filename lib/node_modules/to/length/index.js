var toInteger = require('to/integer');
var clamp = require('@timelaps/number/clamp');
var MAX_ARRAY_INDEX = require('@timelaps/constants/max-array-index');
module.exports = function toLength(number) {
    return number ? clamp(toInteger(number, true), 0, MAX_ARRAY_INDEX) : 0;
};