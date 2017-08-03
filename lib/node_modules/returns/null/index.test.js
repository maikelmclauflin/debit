var b = require('@timelaps/batterie');
var returnsNull = require('.');
b.describe('returns.null', function () {
    b.expect(returnsNull).toBeFunction();
    b.expect(returnsNull()).toBeNull();
});