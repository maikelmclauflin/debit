var isDefined = require('./defined');
var b = require('batterie');
b.describe('isDefined', function () {
    b.expect(isDefined, 'toBeFunction');
    b.expect(isDefined(), 'toBeFalse');
    b.expect(isDefined(null), 'toBeFalse');
    b.expect(isDefined({}), 'toBeTrue');
    b.expect(isDefined([]), 'toBeTrue');
    b.expect(isDefined(function () {}), 'toBeTrue');
    b.expect(isDefined(true), 'toBeTrue');
    b.expect(isDefined(false), 'toBeTrue');
});