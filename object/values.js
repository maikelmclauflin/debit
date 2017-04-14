var forOwn = require('./utils/object/for-own');
var passesFirstArgument = require('./utils/passes/first');
var bindTo = require('./utils/function/bind');
module.exports = function (object) {
    var collected = [];
    forOwn(object, passesFirstArgument(function (item) {
        collected.push(item);
    }));
    return collected;
};