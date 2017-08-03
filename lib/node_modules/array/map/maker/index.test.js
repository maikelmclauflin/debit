var b = require('@timelaps/batterie');
var maker = require('.');
b.describe('maker', function () {
    b.expect(maker).toBeFunction();
});