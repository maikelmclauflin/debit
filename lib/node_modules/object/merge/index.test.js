var merge = require('.');
var b = require('@timelaps/batterie');
b.describe('merge', function () {
    b.expect(merge).toBeFunction();
    b.expect(merge()).toBeUndefined();
    b.it('is a basic assign', function (t) {
        t.expect(merge({}, {
            a: 1
        })).toEqual({
            a: 1
        });
    });
    b.it('can also do deep merges', function (t) {
        var original = {
            a: {
                b: 1,
                c: 3
            }
        };
        var merger = {
            a: {
                b: 2
            }
        };
        t.expect(merge(original, merger, true)).toEqual({
            a: {
                b: 2,
                c: 3
            }
        });
    });
});