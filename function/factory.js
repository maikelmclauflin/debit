module.exports = factory;
var toArray = require('./utils/to/array');

function factory(name, func_) {
    var func = func_ ? func_ : name;
    var extensor = {
        constructor: function (supr) {
            var args = toArray(arguments).slice(1);
            return func.apply(supr.apply(this, arguments), arguments);
        }
    };
    var args = func === func_ ? [name, extensor] : [extensor];
    return this.extend.apply(this, args);
}