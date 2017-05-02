var isValidInteger = require('./valid-integer');
var b = require('batterie');
b.describe('isValidInteger', function () {
    b.expect(isValidInteger, 'toBeFunction');
    b.expect(isValidInteger(), 'toBeFalse');
    b.expect(isValidInteger(null), 'toBeFalse');
    b.expect(isValidInteger(false), 'toBeFalse');
    b.expect(isValidInteger(0), 'toBeTrue');
    b.expect(isValidInteger(1e10000), 'toBeFalse');
});