var b = require('@timelaps/batterie');
var nth = require('.');
var numbers = [1, 2, 3, 4, 5, 6, 7];
b.describe('nth', function () {
    b.it('acceses items', [
        ['in arrays', nth(numbers, 5), 6],
        ['in strings', nth('1234567', 5), '6'],
        ['only when it has a number', nth(numbers), undefined]
    ]);
});