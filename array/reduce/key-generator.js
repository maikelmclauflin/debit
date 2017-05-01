var isObject = require('./utils/is/object');
var objectKeyGenerator = require('./utils/generator/keys');
var isArrayLike = require('./utils/is/array-like');
var arrayKeyGenerator = require('./utils/generator');
var noop = require('./utils/function/noop');
module.exports = function keyGenerator(object, dir, cap, incrementor) {
    return isArrayLike(object) ? arrayKeyGenerator(object, dir, cap, incrementor) : (isObject(object) ? objectKeyGenerator(object, dir, cap, incrementor) : noop);
};