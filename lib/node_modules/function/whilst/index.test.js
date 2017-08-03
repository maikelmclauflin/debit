var whilst = require('.');
var b = require('@timelaps/batterie');
b.describe('whilst', function (t) {
    b.expect(whilst, 'toBeFunction');
    b.expect(whilst, 'toThrow');
    b.it('continues to run functions until they return false', function (t) {
        whilst(function (memo) {
            return memo < 10;
        }, function (memo) {
            t.expect(memo).toBeNumber();
            return ++memo;
        }, 1);
    }, 9);
});