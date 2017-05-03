var b = require('batterie');
var stringify = require('./stringify');
b.describe('stringifyJSON', function () {
    b.expect(stringify, 'toBeFunction');
    b.expect(stringify(), 'toBeUndefined');
    b.expect(stringify(''), 'toBe', '""');
    b.expect(stringify({}), 'toBe', '{}');
    b.expect(stringify([]), 'toBe', '[]');
});