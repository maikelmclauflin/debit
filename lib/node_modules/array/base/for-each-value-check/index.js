var isKey = require('@timelaps/is/key');
module.exports = isValue;

function isValue(value) {
    if (isKey(value)) {
        return value;
    }
}