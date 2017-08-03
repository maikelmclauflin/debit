var b = require('@timelaps/batterie');
var stringify = require('.');
b.describe('stringifyJSON', function () {
    b.expect(stringify, 'toBeFunction');
    b.expect(stringify(), 'toBeUndefined');
    b.expect(stringify(''), 'toBe', '""');
    b.expect(stringify({}), 'toBe', '{}');
    b.expect(stringify([]), 'toBe', '[]');
});