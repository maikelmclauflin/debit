var b = require('@timelaps/batterie');
var returnsFalse = require('.');
b.describe('returns.false', function () {
    b.expect(returnsFalse).toBeFunction();
    b.expect(returnsFalse()).toBeFalse();
});