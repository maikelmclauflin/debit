var isNumber = require('./utils/is/number');
module.exports = function (number, lower, upper) {
    return isNumber(number) ? (number < lower ? lower : (number > upper ? upper : number)) : number;
};