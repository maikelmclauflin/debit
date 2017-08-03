var MAX_INTEGER = require('@timelaps/constants/max-integer');
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var toNumber = require('@timelaps/hacks/to-number');
var isInfinite = require('@timelaps/is/infinite');
var isNan = require('@timelaps/is/nan');
module.exports = function (value) {
    var sign;
    if (!value) {
        return isStrictlyEqual(value, 0) ? value : 0;
    }
    value = toNumber(value);
    if (isInfinite(value)) {
        return (value < 0 ? -1 : 1) * MAX_INTEGER;
    }
    return isNan(value) ? 0 : value;
};