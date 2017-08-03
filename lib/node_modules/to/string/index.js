var isNil = require('@timelaps/is/nil');
var baseToString = require('to/base/string');
module.exports = function (value) {
    return isNil(value) ? '' : baseToString(value);
};