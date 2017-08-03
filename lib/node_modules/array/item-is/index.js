module.exports = itemIs;
var isStrictlyEqual = require('@timelaps/is/strictly-equal');

function itemIs(list, item, index) {
    return isStrictlyEqual(list[index || 0], item);
}