var isStrictlyEqual = require('./utils/is/strictly-equal');
var isFinite = require('./utils/is/finite');
module.exports = function (num) {
    return isFinite(num) && isStrictlyEqual(num, Math.round(num));
};