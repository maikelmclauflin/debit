var extend = require('.');
var b = require('@timelaps/batterie');
b.describe('extend', function () {
    var first, second;
    b.expect(extend).toBeFunction();
    b.expect(extend()).toBeUndefined();
    b.expect(extend([])).toBeObject();
    first = {};
    b.expect(extend([first])).toBe(first);
    first = {};
    second = {
        one: 1,
        two: 2
    };
    var extended = extend([first, second]);
    b.expect(extended).toBe(first);
    b.expect(extended).toEqual(second);
});