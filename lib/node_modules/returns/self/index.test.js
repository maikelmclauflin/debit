var b = require('@timelaps/batterie');
var returnsSelf = require('.');
b.describe('returns.self', function () {
    b.expect(returnsSelf).toBeFunction();
    b.expect(returnsSelf()).toBe(global || window);
});