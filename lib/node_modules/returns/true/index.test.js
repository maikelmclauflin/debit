var b = require('@timelaps/batterie');
var returnsTrue = require('.');
b.describe('returns.true', function () {
    b.expect(returnsTrue).toBeFunction();
    b.expect(returnsTrue()).toBeTrue();
});