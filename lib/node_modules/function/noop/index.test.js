var noop = require('.');
var b = require('@timelaps/batterie');
b.describe('noop', function () {
    b.expect(noop, 'toBeFunction');
    b.expect(noop(), 'toBeUndefined');
});