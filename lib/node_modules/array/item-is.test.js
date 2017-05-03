var itemIs = require('./item-is');
var b = require('batterie');
var numbers = [31, 2, 56];
b.describe('itemIs', function () {
    b.it('checks whether a given item is equal', [
        ['if nothing is passed then the first is assumed', itemIs(numbers, 31), true],
        ['an index can be passed as the third argument', itemIs(numbers, 2, 1), true]
    ]);
});