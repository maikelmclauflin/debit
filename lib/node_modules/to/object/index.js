var isObject = require('@timelaps/is/object');
module.exports = function (argument) {
    return isObject(argument) ? argument : {};
};