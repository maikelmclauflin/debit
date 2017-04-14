var keys = require('./utils/object/keys');
var values = require('./utils/object/values');
var blockWrapper = require('./utils/function/block-wrapper');
var isFunction = require('./utils/is/function');
var unwrapBlock = require('./utils/function/unwrap-block');
module.exports = function evaluate(string_, context, args) {
    var fn, fnstring, string = string_,
        keyz = keys(args),
        valuz = values(args);
    if (isFunction(string_)) {
        string = unwrapBlock(string_);
    }
    fnstring = blockWrapper('"use strict";\nreturn (function(' + keyz.join(', ') + ') {' + (string || '') + '}.apply(this, __args__))');
    fn = new Function.constructor('__args__', fnstring);
    return fn.call(context, valuz);
};