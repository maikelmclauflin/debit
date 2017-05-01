var isEmptyArray = require('./empty-array');
var b = require('batterie');
b.describe('isEmptyArray', function () {
    b.expect(isEmptyArray, 'toBeFunction');
    b.expect(isEmptyArray(), 'toBeFalse');
    b.expect(isEmptyArray(null), 'toBeFalse');
    b.expect(isEmptyArray({}), 'toBeFalse');
    b.expect(isEmptyArray([1]), 'toBeFalse');
    b.expect(isEmptyArray([]), 'toBeTrue');
    b.expect(isEmptyArray(function () {}), 'toBeFalse');
    b.expect(isEmptyArray(true), 'toBeFalse');
    b.expect(isEmptyArray(false), 'toBeFalse');
});