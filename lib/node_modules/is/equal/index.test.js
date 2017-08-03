var isEqual = require('.');
var b = require('@timelaps/batterie');
b.describe('isEqual', function () {
    b.expect(isEqual).toBeFunction();
    b.expect(isEqual()).toBeTrue();
    b.expect(isEqual(null)).toBeFalse();
    b.expect(isEqual({}, {})).toBeTrue();
    b.expect(isEqual([], [])).toBeTrue();
    b.expect(isEqual([1], [2])).toBeFalse();
    b.expect(isEqual(function () {}, function () {})).toBeFalse();
    b.expect(isEqual(true, true)).toBeTrue();
    b.expect(isEqual(false, true)).toBeFalse();
});