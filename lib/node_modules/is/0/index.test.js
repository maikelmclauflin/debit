var is0 = require('.');
var b = require('@timelaps/batterie');
b.describe('is0', function () {
    b.expect(is0).toBeFunction();
    b.expect(is0()).toBeFalse();
    b.expect(is0(1)).toBeFalse();
    b.expect(is0(false)).toBeFalse();
    b.expect(is0(0)).toBeTrue();
});