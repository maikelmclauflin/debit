var zip = require('./zip');
var b = require('batterie');
b.describe('zip', function () {
    b.it('acts like a pivot table for arrays', [
        ['it can invert arrays', zip([
            [1, 2, 3],
            [1, 2, 3]
        ]), [
            [1, 1],
            [2, 2],
            [3, 3]
        ]],
        ['it can invert lists of any length', zip([
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6],
            [1, 2, 3, 4, 5, 6]
        ]), [
            [1, 1, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 2],
            [3, 3, 3, 3, 3, 3],
            [4, 4, 4, 4, 4, 4],
            [5, 5, 5, 5, 5, 5],
            [6, 6, 6, 6, 6, 6]
        ]]
    ]);
});