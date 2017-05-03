var b = require('batterie');
var copyCacheable = require('./copy');
b.describe('copyCacheable', function () {
    b.it('allows you to process the io of the caching', function (t) {
        var copyCached = copyCacheable(maker);
        var result = {
            one: 1
        };
        t.expect(copyCached()).notToBe(result);
        t.expect(copyCached()).toEqual(result);

        function maker() {
            return result;
        }
    }, 2);
});