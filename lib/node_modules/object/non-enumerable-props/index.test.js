var b = require('@timelaps/batterie');
var nonEnumerableProps =require('.');
b.describe('nonEnumerableProps', function () {
    b.expect(nonEnumerableProps).toBeArray();
    b.expect(nonEnumerableProps.indexOf('toString')).toBeGreaterThan(-1);
});