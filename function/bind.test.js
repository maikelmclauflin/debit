var bind = require('./bind');
var b = require('batterie');
var toArray = require('./utils/to/array');
var obj = {};
b.describe('bind', function () {
    b.it('creates new functions when it binds', b.curry(bind(noop, obj), 'notToEqual', noop));
    b.it('allows functions to be run in a different context', [
        ['by default it is a noop', bind(noop), noop],
        ['will bind to truthy values', bind(noop, obj)(), [obj, []]],
        ['can also bind arguments', bind(noop, obj, 1, 2, 3)(), [obj, [1, 2, 3]]]
    ]);
});

function noop() {
    return [this, toArray(arguments)];
}