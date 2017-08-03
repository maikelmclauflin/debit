var isInfinite = require('.');
var b = require('@timelaps/batterie');
b.describe('isInfinite', function () {
    b.expect(isInfinite, 'toBeFunction');
    b.expect(isInfinite(), 'toBeFalse');
    b.expect(isInfinite(Infinity), 'toBeTrue');
    b.expect(isInfinite(-Infinity), 'toBeTrue');
});