var chunk = require('.');
var b = require('@timelaps/batterie');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
b.describe('chunk', function () {
    b.it('splits', [
        ['strings', chunk('abcdefghi', 3), ['abc', 'def', 'ghi']],
        ['strings', chunk('abcdefghi', 2), ['ab', 'cd', 'ef', 'gh', 'i']],
        ['arrays', chunk(numbers, 3), [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]],
        ['arrays', chunk(numbers, 2), [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
            [9]
        ]]
    ]);
});