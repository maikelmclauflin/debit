var b = require('@timelaps/batterie');
var throws = require('.');
b.describe('throws', function () {
    b.expect(throws).toBeFunction();
    b.expect(throws).toThrow();
});