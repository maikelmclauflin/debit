var b = require('@timelaps/batterie');
var now = require('.');
b.describe('date.now', function () {
    b.expect(now).toBeFunction();
    b.it('gives the time in number form', function (t) {
        t.expect(now()).toBeNumber();
    });
});