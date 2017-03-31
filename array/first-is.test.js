var b = require('batterie');
var firstIs = require('./first-is');
b.describe('firstIs', function () {
    b.it('a function', b.curry(firstIs, 'toBeFunction'));
    b.it('checks the first element in an array', b.curry(firstIs([5, 2, 7, 3, 4, 1], 5), 'toBeTrue'));
    b.it('returns booleans', b.curry(firstIs([5, 2, 7, 3, 4, 1], 2), 'toBeFalse'));
});