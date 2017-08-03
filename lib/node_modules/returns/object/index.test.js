var b = require('@timelaps/batterie');
var returnsObject = require('.');
b.describe('returns.object', function () {
    b.expect(returnsObject).toBeFunction();
    b.expect(returnsObject()).toBeObject();
});