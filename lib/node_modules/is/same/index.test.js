var isSame = require('.');
var b = require('@timelaps/batterie');
b.describe('isSame', function () {
    b.expect(isSame, 'toBeFunction');
    b.expect(isSame(), 'toBeTrue');
    b.expect(isSame(''), 'toBeFalse');
    b.expect(isSame(NaN, NaN), 'toBeTrue');
    b.expect(isSame(Infinity, Infinity), 'toBeTrue');
    b.expect(isSame(function () {}, function () {}), 'toBeFalse');
});