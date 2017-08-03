var isUndefined = require('@timelaps/is/undefined');
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
module.exports = function (val1, val2, key, o1, o2) {
    if (!isUndefined(val2) && !isStrictlyEqual(val1, val2)) {
        o1[key] = val2;
    }
};