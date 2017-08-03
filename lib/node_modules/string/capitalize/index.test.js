var b = require('@timelaps/batterie');
var capitalize = require('.');
b.describe('string.capitalize', function () {
    b.expect(capitalize).toBeFunction();
    b.expect(capitalize).toThrow();
    b.it('capitalizes the starts of strings', function (t) {
        t.expect(capitalize('my name is')).toBe('My name is');
    });
});