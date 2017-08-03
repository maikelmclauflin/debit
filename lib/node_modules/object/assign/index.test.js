var assign = require('.');
var b = require('@timelaps/batterie');
b.describe('assign', function () {
    b.expect(assign).toBeFunction();
    b.it('uses native assign if it is available', function (t) {
        t.expect(assign === Object.assign).toBe(!!Object.assign);
    });
    b.it('assigns a bunch of properties at once to the first argument', function (t) {
        var p1 = {};
        var p2 = {
            a: 1,
            b: 2,
            c: 3
        };
        assign(p1, p2);
        t.expect(p1).toEqual(p2);
        t.expect(p1).notToBe(p2);
    }, 2);
});