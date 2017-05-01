var isStrictlyEqual = require('./utils/is/strictly-equal');
var isValue = require('./utils/is/value');
var isBoolean = require('./utils/is/boolean');
var isString = require('./utils/is/string');
var isNumber = require('./utils/is/number');
var isInteger = require('./utils/is/integer');
module.exports = function (key) {
    // -1 for arrays
    // any other data type ensures string
    return isString(key) || (!isStrictlyEqual(key, -1) && isNumber(key) && isInteger(key));
};