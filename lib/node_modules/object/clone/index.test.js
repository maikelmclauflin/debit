var b = require('@timelaps/batterie');
var clone = require('.');
b.describe('clone', function () {
    b.expect(clone).toBeFunction();
    b.expect(clone()).toBeUndefined();
    b.expect(clone({})).toEqual({});
    b.expect(clone([])).toEqual([]);
    var list = [1, 2, 3];
    b.expect(clone(list)).toEqual(list);
    b.expect(clone(list)).notToBe(list);
    b.expect(clone('')).toEqual('');
    b.expect(clone(1)).toEqual(1);
    b.expect(clone()).toEqual();
    b.expect(clone(null)).toEqual(null);
});