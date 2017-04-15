var toString = require('./object-to-string');
var b = require('batterie');
b.describe('toString', function () {
    b.it('converts objects to their bracket string values', function (t) {
        t.expect(toString).toBeFunction();
        t.expect(toString()).toBe('[object Undefined]');
        t.expect(toString(null)).toBe('[object Null]');
        t.expect(toString({})).toBe('[object Object]');
        t.expect(toString('')).toBe('[object String]');
        t.expect(toString(0)).toBe('[object Number]');
        t.expect(toString(function () {})).toBe('[object Function]');
        t.expect(toString([])).toBe('[object Array]');
    }, 8);
});