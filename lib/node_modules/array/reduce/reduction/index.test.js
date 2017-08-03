var reduction = require('.');
var b = require('@timelaps/batterie');
b.describe('reduction', function () {
    b.expect(reduction).toBeFunction();
    b.it('is a generalized reduce', function (t) {
        var list = [];
        t.expect(reduction({
            a: 1,
            b: 2,
            c: 3,
            d: 4
        }, function (memo, value, key) {
            list.push(key);
            return memo + value;
        }, 0)).toBe(10);
        t.expect(list.sort()).toEqual(['a', 'b', 'c', 'd']);
    }, 2);
});