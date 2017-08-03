var isEmpty = require('.');
var b = require('@timelaps/batterie');
b.describe('isEmpty', function () {
    b.expect(isEmpty).toBeFunction();
    b.expect(isEmpty()).toBeTrue();
    b.expect(isEmpty(null)).toBeTrue();
    b.expect(isEmpty({})).toBeTrue();
    b.expect(isEmpty([1])).toBeFalse();
    b.expect(isEmpty([])).toBeTrue();
    b.expect(isEmpty(function () {})).toBeTrue();
    b.expect(isEmpty(true)).toBeTrue();
    b.expect(isEmpty(false)).toBeTrue();
});