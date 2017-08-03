var passesSecond = require('.');
var b = require('@timelaps/batterie');
b.describe('passesSecond', function () {
    b.expect(passesSecond).toBeFunction();
    b.it('returns a function', function (t) {
        t.expect(passesSecond()).toBeFunction();
    });
    b.it('only allows the first argument through', function (t) {
        passesSecond(function (a, b, c) {
            t.expect(a).toBe(2);
            t.expect(b).toBeUndefined();
            t.expect(c).toBeUndefined();
        })(1, 2, 3);
    }, 3);
});