var negate = require('./negate');
var b = require('batterie');
b.describe('negate', function () {
    b.it('is a function', b.curry(negate, 'toBeFunction'));
    b.it('returns a function', b.curry(negate(), 'toBeFunction'));
    b.it('must be passed a function', function (t) {
        t.expect(function () {
            negate()();
        }).toThrow();
        t.expect(function () {
            negate(function () {})();
        }).notToThrow();
    }, 2);
    // b.it(['negates the result', [
    //     negate(function () {})(), false
    // ]]);
    // b.it('negates the result', function (t) {
    //     t.expect(negate(function () {})()).toBeFalse()
    // });
});