var under1 = require('.');
var b = require('@timelaps/batterie');
b.describe('under1', function () {
    b.expect(under1).toBeFunction();
    b.expect(under1()).toBeUndefined();
    b.expect(under1(2)).toBe(0.5);
    b.expect(under1(0.3)).toBe(0.3);
});