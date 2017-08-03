var b = require('@timelaps/batterie');
var access = require('.');
b.describe('access', function () {
    b.expect(access).toBeFunction();
    b.expect(access()).toBeUndefined();
    b.expect(access(false)).toBeUndefined();
    b.expect(access(null)).toBeUndefined();
    b.expect(access({})).toBeUndefined();
    var special = {
        here: true
    };
    b.expect(access(special)).toBeUndefined();
    b.expect(access(special, 'here')).toBeTrue();
});