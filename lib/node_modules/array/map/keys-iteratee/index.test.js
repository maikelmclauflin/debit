var mapKeysIteratee = require('.');
var b = require('@timelaps/batterie');
b.describe('mapKeysIteratee', function () {
    b.expect(mapKeysIteratee).toBeFunction();
    b.it('generically maps keys to objects, retaining the original value', function (t) {
        var object = {};
        mapKeysIteratee(object, function (item) {
            return item * 3;
        })(2, 'b');
        t.expect(object).toEqual({
            '6': 2
        });
    });
});