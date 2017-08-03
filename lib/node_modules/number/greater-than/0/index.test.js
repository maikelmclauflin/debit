var isGreaterThan0 = require('.');
var b = require('@timelaps/batterie');
b.describe('isGreaterThan0', function () {
    b.expect(isGreaterThan0).toBeFunction();
    b.expect(isGreaterThan0()).toBeFalse();
    b.expect(isGreaterThan0(-1)).toBeFalse();
    b.expect(isGreaterThan0(1)).toBeTrue();
});