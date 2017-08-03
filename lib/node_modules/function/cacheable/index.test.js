var cacheable = require('.');
var b = require('@timelaps/batterie');
b.describe('cacheable', function () {
    b.it('caches function calls', function (t) {
        var output = 0;
        var caching = cacheable(impure);
        t.expect(caching()).toBe(0);
        output++;
        t.expect(caching()).toBe(0);
        output++;
        t.expect(caching(1)).toBe(2);

        function impure(input) {
            return output;
        }
    }, 3);
});