var b = require('batterie');
var tail = require('./tail');
var list = [1, 2, 3];
b.describe('tail', function () {
    b.it('slices arrays', [
        ['array is required', b.curry(function () {
            return tail();
        }, 'notToThrow')],
        ['accepts an array', tail(list), [2, 3]],
        ['can slice to any ammount', tail(list.concat(list), 4), [2, 3]],
        ['does not modify in place', b.curry(tail(list, 0), 'notToBe', list)],
        ['does not modify in place', b.curry(tail(list, 0), 'toEqual', list)]
    ]);
});