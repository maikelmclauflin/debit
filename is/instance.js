var isOf = require('./utils/is/of');
var has = require('./utils/object/has');
var CONSTRUCTOR = 'constructor';
module.exports = function instance(instance, constructor_) {
    var constructor = constructor_;
    if (has(constructor, CONSTRUCTOR)) {
        constructor = constructor[CONSTRUCTOR];
    }
    return isOf(instance, constructor);
};