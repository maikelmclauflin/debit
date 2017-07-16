module.exports = values;
var forOwn = require('object/for/own');
var passesFirstArgument = require('passes/first');
var bindTo = require('function/bind');
var push = [].push;
function values(object) {
    var collected = [];
    forOwn(object, passesFirstArgument(bindTo(push, collected)));
    return collected;
}