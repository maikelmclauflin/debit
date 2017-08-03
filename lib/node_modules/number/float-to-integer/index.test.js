var floatToInteger = require('.');
var b = require('@timelaps/batterie');
b.describe('floatToInteger', function () {
    b.expect(floatToInteger).toBeFunction();
    b.expect(floatToInteger()).toBeUndefined();
    b.expect(floatToInteger(5.5)).toBe(5);
    b.expect(floatToInteger(5.9)).toBe(5);
    b.expect(floatToInteger(-5.9)).toBe(-5);
});