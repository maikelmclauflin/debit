var isNotNan = require('@timelaps/is/not-nan');
module.exports = function floatToInteger(value) {
    var remainder = value % 1;
    return isNotNan(value) ? (remainder ? value - remainder : value) : 0;
};