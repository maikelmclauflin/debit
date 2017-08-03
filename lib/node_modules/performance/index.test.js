var performance = require('.');
var b = require('@timelaps/batterie');
b.describe('performance', function () {
    b.expect(performance).toBeFunction();
    var p = performance(global);
    b.expect(p).toBeObject();
    b.expect(p.now).toBeFunction();
});