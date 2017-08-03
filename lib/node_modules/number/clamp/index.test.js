var b = require('@timelaps/batterie');
var clamp = require('.');
b.describe('clamp', function () {
    b.expect(clamp).toBeFunction();
    b.expect(clamp()).toBeUndefined();
    b.expect(clamp(Infinity, -1, 1)).toBeFinite();
    b.expect(clamp(5, -1, 1)).toBe(1);
});