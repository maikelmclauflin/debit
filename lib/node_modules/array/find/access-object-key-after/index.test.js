var b = require('@timelaps/batterie');
var accessKeyAfter = require('.');
b.describe('accessKeyAfter', function () {
    b.expect(accessKeyAfter).toBeFunction();
    b.it('access the key only, not the value', function (t) {
        t.expect(accessKeyAfter(2, {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }, ['a', 'b', 'c', 'd'])).toBe('c');
    });
    b.it('also works with arrays', function (t) {
        t.expect(accessKeyAfter(2, [], [], true)).toBe(2);
    });
});