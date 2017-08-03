var mergeWith = require('.');
var b = require('@timelaps/batterie');
b.describe('mergeWith', function () {
    b.expect(mergeWith).toBeFunction();
    b.expect(mergeWith()).toBeUndefined();
    b.it('merges according to a function passed to it', function (t) {
        t.expect(mergeWith({
            a: 1
        }, {
            b: 2
        }, function (val1, val2, key, o1, o2) {
            o1[val2] = key;
            o1[key] = val2;
        })).toEqual({
            a: 1,
            b: 2,
            '2': 'b'
        });
    });
});