var isArray = require('./array');
var b = require('batterie');
b.describe('isArray', function () {
    b.expect(isArray, 'toBeFunction');
    b.expect(isArray(), 'toBeFalse');
    b.expect(isArray(1), 'toBeFalse');
    b.expect(isArray(false), 'toBeFalse');
    b.expect(isArray(function () {}), 'toBeFalse');
    b.expect(isArray([]), 'toBeTrue');
    b.expect(isArray({}), 'toBeFalse');
    b.expect(isArray({
        '0': true,
        '1': false,
        length: 2
    }), 'toBeFalse');
});