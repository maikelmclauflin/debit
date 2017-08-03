var b = require('@timelaps/batterie');
var values = require('.');
b.describe('values', function () {
    b.expect(values).toBeFunction();
    b.it('puts the values of an object into an array', function (t) {
        t.expect(values({
            a: 1,
            b: 2
        })).toEqual([1, 2]);
    });
});