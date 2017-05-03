var b = require('batterie');
var head = require('./head');
var list = [1, 2, 3];
b.describe('head', function () {
    b.it('slices arrays', [
        ['array is required', b.curry(function () {
            return head();
        }, 'toThrow')],
        ['accepts an array', head(list), [1, 2]],
        ['can slice to any ammount', head(list.concat(list), 2), [1, 2]],
        ['does not modify in place', b.curry(head(list, list.length), 'notToBe', list)],
        ['does not modify in place', b.curry(head(list, list.length), 'toEqual', list)]
    ]);
});