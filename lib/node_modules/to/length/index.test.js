var toLength = require('.');
var b = require('@timelaps/batterie');
b.describe('to.length', function () {
    b.expect(toLength).toBeFunction();
    b.expect(toLength()).toBe(0);
    b.expect(toLength(1e18)).toBeLessThan(1e18);
    b.expect(toLength(-1)).toBe(0);
});