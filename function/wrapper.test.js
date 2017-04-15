var wrapper = require('./wrapper');
var b = require('batterie');
b.describe('wrapper', function () {
    b.expect(wrapper, 'toBeFunction');
    b.expect(wrapper, 'notToThrow');
    b.it('curries functions', function (t) {
        var wraps = wrapper(defaultFn);
        var first = wraps(function (item, value, next) {
            return next() + 4;
        });
        var second = wraps(function (item, value, next) {
            return next() + item;
        }, first);
        t.expect(second(5)).toBe(10);

        function defaultFn() {
            return 1;
        }
    });
});