var isTrue = require('.');
var b = require('@timelaps/batterie');
b.describe('isTrue', function () {
    b.expect(isTrue).toBeFunction();
    b.expect(isTrue()).toBeFalse();
    b.expect(isTrue(false)).toBeFalse();
    b.expect(isTrue(true)).toBeTrue();
});