var b = require('@timelaps/batterie');
var pad = require('.');
b.describe('pad', function () {
    b.expect(pad).toBeFunction();
    b.expect(pad).notToThrow();
    b.expect(pad()).toBe('');
    b.expect(pad('string', 13, 'ba')).toBe('babstringbaba');
});