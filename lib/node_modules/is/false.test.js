var isFalse = require('./false');
var b = require('batterie');
b.describe('isFalse', function () {
    b.expect(isFalse, 'toBeFunction');
    b.expect(isFalse(), 'toBeFalse');
    b.expect(isFalse(null), 'toBeFalse');
    b.expect(isFalse({}), 'toBeFalse');
    b.expect(isFalse([]), 'toBeFalse');
    b.expect(isFalse(function () {}), 'toBeFalse');
    b.expect(isFalse(false), 'toBeTrue');
    b.expect(isFalse(true), 'toBeFalse');
});