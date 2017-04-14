module.exports = bind;
var toArray = require('./utils/to/array');
var bindTo = require('./utils/function/bind-to');
var bindWith = require('./utils/function/bind-with');

function bind(func, context) {
    return arguments.length < 3 ? bindTo(func, context) : bindWith(func, toArray(arguments).slice(1));
}