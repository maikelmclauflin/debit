var isUndefined = require('./undefined');
var b = require('batterie');
b.describe('isUndefined', function () {
    b.expect(isUndefined, 'toBeFunction');
    b.expect(isUndefined(), 'toBeTrue');
    b.expect(isUndefined(null), 'toBeFalse');
    b.expect(isUndefined(false), 'toBeFalse');
});