var passesFirst = require('.');
var b = require('@timelaps/batterie');
b.describe('passesFirst', function () {
    b.expect(passesFirst).toBeFunction();
    b.it('returns a function', function (t) {
        t.expect(passesFirst()).toBeFunction();
    });
    b.it('only allows the first argument through', function (t) {
        passesFirst(function (a, b, c) {
            t.expect(a).toBe(1);
            t.expect(b).toBeUndefined();
            t.expect(c).toBeUndefined();
        })(1, 2, 3);
    }, 3);
});