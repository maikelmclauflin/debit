var isRegExp = require('./reg-exp');
var b = require('batterie');
b.describe('isRegExp', function () {
    b.expect(isRegExp, 'toBeFunction');
    b.expect(isRegExp(), 'toBeFalse');
    b.expect(isRegExp(/some/), 'toBeTrue');
});