var isObject = require('@timelaps/is/object');
var isPointer = require('@timelaps/is/pointer');
var isFunction = require('@timelaps/is/function');
module.exports = function result(obj, str, arg) {
    return isPointer(obj) ? (isFunction(obj[str]) ? obj[str](arg) : (isObject(obj) ? obj[str] : obj)) : obj;
};