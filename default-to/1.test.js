var defaultTo1 = require('./1');
var b = require('batterie');
b.describe('defaultTo1', function () {
    b.it('has a default fallback of 1', [
        ['it will choose the first if it is not undefined', defaultTo1(5), 5],
        ['otherwise it will return 1', defaultTo1(), 1]
    ]);
});