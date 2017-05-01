var notNan = require('./not-nan');
var b = require('batterie');
b.describe('notNan', function () {
    b.expect(notNan, 'toBeFunction');
    b.expect(notNan(), 'toBeTrue');
    b.expect(notNan(1), 'toBeTrue');
    b.expect(notNan(NaN), 'toBeFalse');
    b.expect(notNan(function () {}), 'toBeTrue');
});