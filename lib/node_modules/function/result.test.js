var result = require('./result');
var b = require('batterie');
var context = {
    undefined: false,
    fn: function () {
        return true;
    }
};
b.describe('result', function () {
    b.expect(result, 'toBeFunction');
    b.it('is a noop by defult', b.curry(result(), 'toBeUndefined'));
    b.it('can be passed a dissociated context and key', function (t) {
        t.expect(result(context, 'fn')).toBeTrue();
    });
    b.it('can be passed nothing and it will still try to access the value', function (t) {
        t.expect(result(context)).toBeFalse();
    });
});