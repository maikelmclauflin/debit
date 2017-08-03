var isFunction = require('@timelaps/is/function');
var isObject = require('@timelaps/is/object');
var JSONStringify = require('@timelaps/json/stringify');
var isString = require('@timelaps/is/string');
var isNumber = require('@timelaps/is/number');
module.exports = function (obj) {
    return (isFunction(obj) ? obj.toString() : (isString(obj) || isNumber(obj) || isObject(obj)) ? JSONStringify(obj) : obj) + '';
};