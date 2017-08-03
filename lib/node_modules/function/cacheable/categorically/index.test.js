var categoricallyCachable = require('.');
var b = require('@timelaps/batterie');
b.describe('cacheable', function () {
    b.it('must be given a function that returns a function', function (t) {
        t.expect(function () {
            var cached = categoricallyCachable(resulter, 'baseline');
            cached();

            function resulter() {}
        }).toThrow();
    });
    b.it('caches function under different modifiers', function (t) {
        var prefixer = categoricallyCachable(resulter, '_');
        t.expect(prefixer('m')).toBe('_1m');
        t.expect(prefixer('m')).toBe('_1m');
        t.expect(prefixer('n')).toBe('_2n');
        t.expect(prefixer('n', '-')).toBe('-1n');

        function resulter(prefix) {
            var counter = 0;
            return function (input) {
                // some computation
                counter++;
                // then return
                return prefix + counter + input;
            };
        }
    }, 4);
});