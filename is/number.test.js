var isNumber = require('./number');
var b = require('batterie');
b.describe('isNumber', function () {
    b.expect(isNumber, 'toBeFunction');
    b.expect(isNumber(), 'toBeFalse');
    b.expect(isNumber(null), 'toBeFalse');
    b.expect(isNumber(1), 'toBeTrue');
    b.expect(isNumber(-1), 'toBeTrue');
    b.expect(isNumber(Infinity), 'toBeTrue');
    b.expect(isNumber(NaN), 'toBeFalse');
    b.expect(isNumber(function () {}), 'toBeFalse');
});