var isObject = require('.');
var b = require('@timelaps/batterie');
b.describe('isObject', function () {
    b.expect(isObject, 'toBeFunction');
    b.expect(isObject(), 'toBeFalse');
    b.expect(isObject(null), 'toBeFalse');
    b.expect(isObject(1), 'toBeFalse');
    b.expect(isObject(-1), 'toBeFalse');
    b.expect(isObject(Infinity), 'toBeFalse');
    b.expect(isObject(NaN), 'toBeFalse');
    b.expect(isObject(function () {}), 'toBeFalse');
    b.expect(isObject({}), 'toBeTrue');
});