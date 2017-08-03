var isKey = require('.');
var b = require('@timelaps/batterie');
b.describe('isKey', function () {
    b.expect(isKey, 'toBeFunction');
    b.expect(isKey(), 'toBeFalse');
    b.expect(isKey(5), 'toBeTrue');
    b.expect(isKey(5.1), 'toBeFalse');
    b.expect(isKey(Infinity), 'toBeFalse');
    b.expect(isKey(''), 'toBeTrue');
    b.expect(isKey('key'), 'toBeTrue');
    b.expect(isKey({}), 'toBeFalse');
});