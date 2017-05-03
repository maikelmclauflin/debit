var nthIs = require('./nth-is');
var b = require('batterie');
var numbers = [1, 2, 3, 4, 5];
b.describe('nthIs', function () {
    b.it('is a checker for the nth value', [
        ['0 is assumed by default', nthIs(numbers, 1), true],
        ['any index can be used', nthIs(numbers, 3, 2), true],
        ['of strings', nthIs(numbers.join(','), '3', 4), true]
    ]);
});