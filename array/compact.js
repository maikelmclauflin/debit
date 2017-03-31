module.exports = compact;
var filter = require('./utils/array/filter');
var isNil = require('./utils/is/nil');

function compact(list) {
    return filter(list, isNotNil);
}

function isNotNil(item) {
    return !isNil(item);
}