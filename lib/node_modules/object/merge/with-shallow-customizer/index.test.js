var b = require('@timelaps/batterie');
var withShallowCustomizer = require('.');
b.describe('withShallowCustomizer', function () {
    b.expect(withShallowCustomizer).toBeFunction();
    b.it('uses merge arguments to assign / update values', function (t) {
        var obj = {};
        withShallowCustomizer(1, 2, 'a', obj, {});
        t.expect(obj).toEqual({
            a: 2
        });
    });
});