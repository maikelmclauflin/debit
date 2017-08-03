var b = require('@timelaps/batterie');
var roundFloat = require('.');
b.describe('roundFloat', function () {
    b.expect(roundFloat).toBeFunction();
    b.expect(roundFloat()).toBeNan();
    b.expect(roundFloat(1.7420286, 6)).toBe(1.742029);
});