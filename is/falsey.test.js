var isFalsey = require('./falsey');
var b = require('batterie');
b.describe('isFalsey', function () {
    b.expect(isFalsey, 'toBeFunction');
    b.expect(isFalsey(), 'toBeTrue');
    b.expect(isFalsey(null), 'toBeTrue');
    b.expect(isFalsey({}), 'toBeFalse');
    b.expect(isFalsey([]), 'toBeFalse');
    b.expect(isFalsey(function () {}), 'toBeFalse');
    b.expect(isFalsey(false), 'toBeTrue');
    b.expect(isFalsey(true), 'toBeFalse');
});