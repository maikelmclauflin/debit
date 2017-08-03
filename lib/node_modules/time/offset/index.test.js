var b = require('@timelaps/batterie');
var offset = require('.');
b.describe('offset', function () {
    b.expect(offset).toBeNumber();
});