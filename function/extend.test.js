var extend = require('./extend');
var b = require('batterie');
b.describe('extend', function () {
    b.it('is a function', b.curry(extend, 'toBeFunction'));
    b.it('extends constructors', function (t) {
        Class.extend = extend;
        var NuClass = Class.extend({});
        var instance = NuClass();
        t.expect(instance).toBeInstance(Class);
        t.expect(instance).toBeInstance(NuClass.constructor);
        t.expect(instance.fn).toBe(NuClass.fn);

        function Class() {}
    }, 3);
    b.it('passes a bound super in the constructor', function (t) {
        Class.extend = extend;
        var NuClass = Class.extend({
            constructor: function (supr, arg) {
                supr(arg);
            }
        });
        var instance = NuClass([]);
        t.expect(instance).toBeInstance(Class);

        function Class(arg) {
            t.expect(this).toBeInstance(Class);
            t.expect(arg).toBeArray();
        }
    }, 3);
});