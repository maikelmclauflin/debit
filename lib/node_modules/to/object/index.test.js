var toObject = require('.');
var b = require('@timelaps/batterie');
b.describe('to.object', function () {
    b.expect(toObject).toBeFunction();
    b.expect(toObject()).toEqual({});
    b.it('returns any object passed to it', function (t) {
        t.expect(toObject([])).toEqual([]);
        t.expect(toObject(function () {})).toEqual({});
    }, 2);
});