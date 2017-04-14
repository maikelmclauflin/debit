var extend = require('./extend');
var factory = require('./factory');
var b = require('batterie');
b.describe('factory', function () {
    b.it('is a function', b.curry(factory, 'toBeFunction'));
    b.it('extends classes with only a function', function (t) {
        Class.factory = factory;
        Class.extend = extend;
        var NuClass = Class.factory(function (supr, arg) {
            supr(arg);
        });
        var instance = NuClass([]);

        function Class(arg) {
            t.expect(this).toBeInstance(Class);
            t.expect(this).toBeInstance(NuClass.constructor);
            t.expect(arg).toBeArray();
        }
    }, 3);
});