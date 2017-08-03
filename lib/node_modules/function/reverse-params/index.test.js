var reverseParams = require('.');
var b = require('@timelaps/batterie');
b.describe('reverseParams', function () {
    b.expect(reverseParams, 'toBeFunction');
    b.expect(reverseParams(), 'toBeFunction');
    b.it('needs a function passed to it', function (t) {
        t.expect(function () {
            reverseParams()();
        }).toThrow();
        t.expect(function () {
            reverseParams(function () {})();
        }).notToThrow();
    }, 2);
    b.it('calls the original function after reversing the first 2 params', function (t) {
        var A = 1,
            B = 2,
            C = 3;
        reverseParams(function (a, b, c) {
            t.expect(a).toBe(B);
            t.expect(b).toBe(A);
            t.expect(c).toBe(C);
        })(A, B, C);
    }, 3);
});