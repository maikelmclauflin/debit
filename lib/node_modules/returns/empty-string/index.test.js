var b = require('@timelaps/batterie');
var returnsEmptyString = require('.');
b.describe('returns.emptyString', function () {
    b.expect(returnsEmptyString).toBeFunction();
    b.expect(returnsEmptyString()).toBe('');
});