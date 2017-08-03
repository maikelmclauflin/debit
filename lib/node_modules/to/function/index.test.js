var b = require('@timelaps/batterie');
var toFunction = require('to/function');
b.describe('to.function', function () {
    b.expect(toFunction).toBeFunction();
    b.expect(toFunction()).toBeFunction();
    b.it('wraps whatever is passed to it', function (t) {
        var obj = {};
        t.expect(toFunction(obj)()).toBe(obj);
    });
    b.it('will not wrap the argument if it is a function', function (t) {
        var fn = function () {};
        t.expect(toFunction(fn)).toBe(fn);
    });
    b.it('will bind to a context if one is passed', function (t) {
        var fn = function () {
            t.expect(this).toBe(context);
        };
        var context = {};
        toFunction(fn, context)();
    });
});