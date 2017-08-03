var isValidInteger = require('.');
var b = require('@timelaps/batterie');
b.describe('isValidInteger', function () {
    b.expect(isValidInteger).toBeFunction();
    b.expect(isValidInteger()).toBeFalse();
    b.expect(isValidInteger(null)).toBeFalse();
    b.expect(isValidInteger(false)).toBeFalse();
    b.expect(isValidInteger(0)).toBeTrue();
    b.expect(isValidInteger(1e99999)).toBeFalse();
});