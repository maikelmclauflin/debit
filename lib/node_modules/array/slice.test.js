var b = require('batterie');
var slice = require('./slice');
var numbers = [1, 2, 3, 4, 5, 6, 7]
b.describe('slice', function () {
    b.it('takes out chunks of arrays', [
        ['such as removeing the front', slice(numbers, 3), [4, 5, 6, 7]],
        ['or taking a subsection at the front', slice(numbers, 0, 3), [1, 2, 3]],
        ['or taking a bit from the middle', slice(numbers, 2, 4), [3, 4]]
    ]);
});