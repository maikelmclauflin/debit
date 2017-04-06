module.exports = nth;
var isStrictlyEqual = require('./utils/is/strictly-equal');
var toNumberCoerce = require('./utils/to/number');
var access = require('./utils/object/get');

function nth(array, index) {
    var idx = toNumberCoerce(index);
    if (!isStrictlyEqual(idx, -1)) {
        return access(array, idx);
    }
}