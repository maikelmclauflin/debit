var b = require('@timelaps/batterie');
var returnsArray = require('.');
b.describe('returns.array', function () {
    b.expect(returnsArray).toBeFunction();
    b.expect(returnsArray()).toBeArray();
});