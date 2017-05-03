var isNil = require('./nil');
var b = require('batterie');
b.describe('isNil', function () {
    b.expect(isNil, 'toBeFunction');
    b.expect(isNil(), 'toBeTrue');
    b.expect(isNil(undefined), 'toBeTrue');
    b.expect(isNil(null), 'toBeTrue');
    b.expect(isNil(1), 'toBeFalse');
    b.expect(isNil(NaN), 'toBeFalse');
    b.expect(isNil(function () {}), 'toBeFalse');
    b.expect(isNil({}), 'toBeFalse');
});