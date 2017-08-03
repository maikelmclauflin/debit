var toInteger = require('.');
var b = require('@timelaps/batterie');
b.describe('to.integer', function () {
    b.expect(toInteger).toBeFunction();
    b.expect(toInteger()).toBe(0);
    b.it('resolves floats', function (t) {
        t.expect(toInteger(-0.6)).toBe(0);
    });
    b.it('resolves non numbers', function (t) {
        t.expect(toInteger({})).toBe(0);
    });
});