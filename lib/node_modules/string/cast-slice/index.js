module.exports = castSlice;
var isUndefined = require('@timelaps/is/undefined');

function castSlice(array, start, end_) {
    var length = array.length;
    var end = isUndefined(end_) ? length : end_;
    return (isUndefined(start) && end >= length) ? array.slice(end) : array.slice(start, end);
}