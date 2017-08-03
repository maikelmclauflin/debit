module.exports = pushMany;
var arrayPush = [].push;
var isObject = require('@timelaps/is/object');

function pushMany(array, many) {
    return arrayPush.apply(array, isObject(many) ? many : [many]);
}
