var withinRange = require('.');
var b = require('@timelaps/batterie');
b.describe('withinRange', function () {
    b.expect(withinRange).toBeFunction();
    b.expect(withinRange()).toBeFalse();
    b.expect(withinRange(-1, 0, 1)).toBeFalse();
    b.expect(withinRange(0, -1, 1)).toBeTrue();
});