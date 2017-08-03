var isRegExp = require('.');
var b = require('@timelaps/batterie');
b.describe('isRegExp', function () {
    b.expect(isRegExp).toBeFunction();
    b.expect(isRegExp()).toBeFalse();
    b.expect(isRegExp(/some/)).toBeTrue();
});