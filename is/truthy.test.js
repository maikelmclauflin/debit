var isTruthy = require('./truthy');
var b = require('batterie');
b.describe('isTruthy', function () {
    b.expect(isTruthy, 'toBeFunction');
    b.expect(isTruthy(), 'toBeFalse');
    b.expect(isTruthy(false), 'toBeFalse');
    b.expect(isTruthy(null), 'toBeFalse');
    b.expect(isTruthy(0), 'toBeFalse');
    b.expect(isTruthy(''), 'toBeFalse');
    b.expect(isTruthy(true), 'toBeTrue');
    b.expect(isTruthy(1), 'toBeTrue');
    b.expect(isTruthy({}), 'toBeTrue');
    b.expect(isTruthy(function () {}), 'toBeTrue');
});