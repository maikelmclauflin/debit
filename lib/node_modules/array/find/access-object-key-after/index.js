var isNil = require('@timelaps/is/nil');
module.exports = function accessObjectKeyAfter(result, original, iterated, wasArrayLike) {
    return isNil(result) ? result : (wasArrayLike ? result : iterated[result]);
};