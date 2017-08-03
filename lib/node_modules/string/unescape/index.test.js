var b = require('@timelaps/batterie');
var unescape = require('.');
b.describe('unescape', function () {
    b.expect(unescape).toBeFunction();
    b.expect(unescape).notToThrow();
    b.it('swaps escaped values regular html', function (t) {
        t.expect(unescape('&lt;div&gt;&lt;/div&gt;')).toEqual('<div></div>');
    });
});