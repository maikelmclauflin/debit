var isString = require('./string');
var b = require('batterie');
b.describe('isString', function () {
    b.expect(isString, 'toBeFunction');
    b.expect(isString(), 'toBeFalse');
    b.expect(isString(''), 'toBeTrue');
    b.expect(isString(NaN), 'toBeFalse');
    b.expect(isString(1), 'toBeFalse');
    b.expect(isString('1'), 'toBeTrue');
    b.expect(isString(function () {}), 'toBeFalse');
    b.expect(isString({}), 'toBeFalse');
});