var isOf = require('./utils/is/of');
module.exports = function (item) {
    return isOf(item, RegExp);
};