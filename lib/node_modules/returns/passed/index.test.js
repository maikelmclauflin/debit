var b = require('@timelaps/batterie');
var returns = require('.');
b.describe('returns.passed', function () {
    b.expect(returns).toBeFunction();
    b.expect(returns()).toBeFunction();
    b.expect(returns()()).toBeUndefined();
    b.expect(returns(null)()).toBeNull();
    b.expect(returns([])()).toBeArray();
    b.expect(returns({})()).toBeObject();
});