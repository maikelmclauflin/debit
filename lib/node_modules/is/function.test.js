var isFunction = require('./function');
var b = require('batterie');
b.describe('isFunction', function () {
    b.expect(isFunction, 'toBeFunction');
    b.expect(isFunction(), 'toBeFalse');
    b.expect(isFunction(null), 'toBeFalse');
    b.expect(isFunction({}), 'toBeFalse');
    b.expect(isFunction([]), 'toBeFalse');
    b.expect(isFunction(function () {}), 'toBeTrue');
    b.expect(isFunction(false), 'toBeFalse');
    b.expect(isFunction(true), 'toBeFalse');
});