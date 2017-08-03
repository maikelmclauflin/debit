var b = require('@timelaps/batterie');
var now = require('.');
b.describe('performance.now', function (){
    b.expect(now).toBeFunction();
    var n = now(global);
    b.expect(n).toBeFunction();
    b.it('gives an approximation of the current page time', function (t) {
        var d = +(new Date());
        t.expect(n()).toBeLessThan(d);
    });
});