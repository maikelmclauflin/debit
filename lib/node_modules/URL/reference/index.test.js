var b = require('@timelaps/batterie');
var reference = require('.');
b.describe('reference', function () {
    b.expect(reference).toBeFunction();
    b.expect(reference()).toBe('');
    b.expect(reference('http://google.com/some/path')).toBe('http://google.com');
    b.expect(reference({
        referrer: 'http://google.com/some/path'
    })).toBe('http://google.com');
});