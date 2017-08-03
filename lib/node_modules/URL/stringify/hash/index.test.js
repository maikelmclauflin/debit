var b = require('@timelaps/batterie');
var stringifyHash = require('.');
b.describe('URL.stringify.hash', function () {
    b.expect(stringifyHash).toBeFunction();
    b.expect(stringifyHash()).toBe('');
    b.expect(stringifyHash({})).toBe('#{}');
    b.expect(stringifyHash({
        key: 'value'
    })).toBe('#{"key":"value"}');
    b.expect(stringifyHash({
        key: 'cannot query'
    })).toBe('#{"key":"cannot query"}');
});