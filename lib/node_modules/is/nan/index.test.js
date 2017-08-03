var isNan = require('.');
var b = require('@timelaps/batterie');
b.describe('isNan', function () {
    b.expect(isNan, 'toBeFunction');
    b.expect(isNan(), 'toBeFalse');
    b.expect(isNan(1), 'toBeFalse');
    b.expect(isNan(NaN), 'toBeTrue');
});