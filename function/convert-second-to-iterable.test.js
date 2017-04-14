var convertSecondToIterable = require('./convert-second-to-iterable');
var b = require('batterie');
b.describe('convertSecondToIterable', function () {
    b.it('is a function', b.curry(convertSecondToIterable, 'toBeFunction'));
    b.it('results in a function', b.curry(convertSecondToIterable(), 'toBeFunction'));
});