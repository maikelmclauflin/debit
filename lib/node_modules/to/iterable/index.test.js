var b = require('@timelaps/batterie');
var toIterable = require('to/iterable');
var find = require('array/find');
b.describe('to.iterable', function () {
    b.expect(toIterable).toBeFunction();
    b.expect(toIterable()).toBeFunction();
    b.expect(toIterable('prop')({
        prop: 'value'
    })).toBe('value');
    b.it('can match property and value pairs', function (t) {
        var iterable = toIterable(['prop', 'value']);
        var obj = {
            prop: 'value',
            other: 1
        };
        var found = find([{}, {
            prop: 'valu'
        }, obj], iterable);
        t.expect(found).toBe(obj);
    });
    b.it('can match object subsets', function (t) {
        var iterable = toIterable({
            prop: 'value'
        });
        var obj = {
            prop: 'value',
            other: 1
        };
        var found = find([{}, obj, {
            prop: 'valu'
        }], iterable);
        t.expect(found).toBe(obj);
    });
});