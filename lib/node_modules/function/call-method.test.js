var callMethod = require('./call-method');
var b = require('batterie');
var obj = {
    method: returns
};
b.describe('callMethod', function () {
    b.it('calls a function', [
        ['by being told to call it on a context', callMethod(true, 'method', obj), [obj, undefined]],
        ['and returns a single argument', callMethod(true, 'method', obj, obj), [obj, obj]]
    ]);
});

function returns(arg) {
    return [this, arg];
}