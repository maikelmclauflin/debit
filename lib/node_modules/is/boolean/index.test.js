var isBoolean = require('.');
var b = require('@timelaps/batterie');
b.describe('isBoolean', function () {
    b.expect(isBoolean).toBeFunction();
    b.expect(isBoolean()).toBeFalse();
    b.expect(isBoolean(null)).toBeFalse();
    b.expect(isBoolean({})).toBeFalse();
    b.expect(isBoolean([])).toBeFalse();
    b.expect(isBoolean(function () {})).toBeFalse();
    b.expect(isBoolean(true)).toBeTrue();
    b.expect(isBoolean(false)).toBeTrue();
});