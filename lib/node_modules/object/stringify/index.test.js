var b = require('@timelaps/batterie');
var stringify = require('.');
b.describe('stringify', function () {
    b.expect(stringify).toBeFunction();
    b.it('turns everything to a string', function (t) {
        t.expect(stringify()).toBe('undefined');
        t.expect(stringify(null)).toBe('null');
        t.expect(stringify(4)).toBe('4');
        t.expect(stringify('4')).toBe('"4"');
    }, 4);
});