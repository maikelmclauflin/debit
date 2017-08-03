var b = require('@timelaps/batterie');
var first = require('.');
b.describe('first', function () {
    b.it('is a function', b.curry(first, 'toBeFunction'));
    b.it('accesses the first element in a list', b.curry(first([5, 1, 2, 3]), 'toBe', 5));
});