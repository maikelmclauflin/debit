var b = require('@timelaps/batterie');
var flattenWorker = require('.');
b.describe('flattenWorker', function () {
    b.expect(flattenWorker).toBeFunction();
    b.it('helps flatten arrays', function (t) {
        var filter = function () {
            return true;
        };
        var check = function (filtr, nxt) {
            t.expect(filtr).toBe(filter);
            t.expect(nxt).toBe(next);
            check = function () {};
        };
        var next = function (item, filtr, nxt) {
            check(filtr, nxt);
            return item;
        };
        t.expect(flattenWorker([
            [1], 2, [3, [4]]
        ], filter, next)).toEqual([1, 2, 3, [4]]);
    }, 3);
});