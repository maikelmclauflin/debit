var b = require('batterie');
var defaultTo = require('.');
b.describe('defaultTo', function () {
    b.it('is a quick check for existance', [
        ['when a value is passed it is returned', defaultTo(4), 4],
        ['when no value is passed the second argument is returned', defaultTo(undefined, 5), 5],
        ['when both the first and second are passed, it will go down the line', defaultTo(5, 4), 5],
        ['null counts', defaultTo(null, 5), null]
    ]);
});