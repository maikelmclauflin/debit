var castBoolean = require('./utils/boolean/cast');
var get = require('./utils/object/get');
var isFunction = require('./utils/is/function');
module.exports = function (thennable) {
    return isFunction(get(thennable, 'then')) && isFunction(get(thennable, 'catch'));
};