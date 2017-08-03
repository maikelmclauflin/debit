var b = require('@timelaps/batterie');
var returnsFirst = require('.');
b.describe('returns.first', function () {
    b.expect(returnsFirst).toBeFunction();
    b.expect(returnsFirst(1, 2)).toBe(1);
});