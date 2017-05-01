var indexGenerator = require('.');
var b = require('batterie');
b.describe('indexGenerator', function () {
    b.expect(indexGenerator, 'toBeFunction');
    b.it('iterates over array like objects', function (t) {
        var next = indexGenerator([1, 2, 3, 4]);
        t.expect(next()).toBe(0);
        t.expect(next()).toBe(1);
        t.expect(next()).toBe(2);
        t.expect(next()).toBe(3);
        t.expect(next()).toBeUndefined();
        t.expect(next()).toBeUndefined();
    }, 6);
});