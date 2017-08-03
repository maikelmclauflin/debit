var b = require('@timelaps/batterie');
var property = require('.');
b.describe('property', function () {
    b.expect(property).toBeFunction();
    b.expect(property()).toBeFunction();
    b.it('accesses a property on a given object', function (t) {
        var get1 = property('a');
        t.expect(get1({
            a: 1
        })).toBe(1);
    });
});