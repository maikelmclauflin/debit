var b = require('@timelaps/batterie');
var uuid = require('.');
b.describe('uuid', function () {
    b.expect(uuid).toBeFunction();
    b.expect(uuid).toReturnString();
    // WARNING: can be larger
    b.expect(uuid().length).toBeGreaterThanEqualTo(36);
});