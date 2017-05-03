var isValue = require('./value');
var b = require('batterie');
b.describe('isValue', function () {
    b.expect(isValue, 'toBeFunction');
    b.expect(isValue(), 'toBeFalse');
    b.expect(isValue(null), 'toBeFalse');
    b.expect(isValue(NaN), 'toBeFalse');
    b.expect(isValue(false), 'toBeTrue');
    b.expect(isValue(0), 'toBeTrue');
    b.expect(isValue(''), 'toBeTrue');
    b.expect(isValue('thing'), 'toBeTrue');
    b.expect(isValue(function () {}), 'toBeTrue');
    b.expect(isValue({}), 'toBeTrue');
});