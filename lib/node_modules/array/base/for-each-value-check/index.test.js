var b = require('@timelaps/batterie');
var valueCheck = require('.');
b.describe('valueCheck', function () {
    b.expect(valueCheck).toBeFunction();
    b.it('checks for a valid value and returns it if that value exists', function (t) {
        t.expect(valueCheck(null)).toBeUndefined();
        t.expect(valueCheck(NaN)).toBeUndefined();
        t.expect(valueCheck(0)).toBe(0);
        t.expect(valueCheck('string')).toBe('string');
        t.expect(valueCheck('')).toBe('');
        t.expect(valueCheck(function () {})).toBeUndefined();
    }, 6);
});