var kebabCase = require('.');
var b = require('@timelaps/batterie');
b.describe('kebabCase', function () {
    b.expect(kebabCase).toBeFunction();
    b.it('camel cases any non word tokens', function (t) {
        t.expect(kebabCase('non word-tokens_here')).toBe('non-word-tokens-here');
    });
});