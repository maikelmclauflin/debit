var propertyOf = require('.');
var b = require('@timelaps/batterie');
b.describe('propertyOf', function () {
    b.expect(propertyOf).toBeFunction();
    b.expect(propertyOf()).toBeFunction();
    b.expect(propertyOf({
        a: true
    })('a')).toBeTrue();
});