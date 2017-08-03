var keysGenerator = require('.');
var b = require('@timelaps/batterie');
b.describe('keysGenerator', function () {
    b.expect(keysGenerator, 'toBeFunction');
    b.it('iterates over objects', function (t) {
        var next = keysGenerator([1, 2, 3, 4]);
        t.expect(next()).toBe('0');
        t.expect(next()).toBe('1');
        t.expect(next()).toBe('2');
        t.expect(next()).toBe('3');
        t.expect(next()).toBeUndefined();
        t.expect(next()).toBeUndefined();
    }, 6);
    b.it('accesses keys easily enough', function (t) {
        var next = keysGenerator({
            one: 1,
            two: 2,
            three: 3,
            four: 4
        });
        t.expect(next()).toBe('one');
        t.expect(next()).toBe('two');
        t.expect(next()).toBe('three');
        t.expect(next()).toBe('four');
        t.expect(next()).toBeUndefined();
        t.expect(next()).toBeUndefined();
    }, 6);
});