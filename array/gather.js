module.exports = gather;
var concat = require('./utils/array/concat');
var map = require('./utils/array/map');
var isFunction = require('./utils/is/function');

function gather(list, handler) {
    return concat(isFunction(handler) ? map(list, handler) : list);
}