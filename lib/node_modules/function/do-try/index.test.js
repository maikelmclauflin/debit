var doTry = require('.');
var b = require('@timelaps/batterie');
b.describe('doTry', function () {
    b.it('is a function', b.curry(doTry, 'toBeFunction'));
    b.it('takes a series of functions', function (t) {
        var res;
        t.expect(function () {
            doTry(function (item) {
                return item.number;
            }, function () {
                throw {};
            }, function (err, result) {
                res = result;
            })({
                number: 1
            });
        }).notToThrow();
        t.expect(res).toBe(1);
    }, 2);
});