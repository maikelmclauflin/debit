var b = require('@timelaps/batterie');
var protocols = require('.');
b.describe('protocols', function () {
    b.expect(protocols).toBeArray();
    b.expect(protocols.indexOf('http')).toBeGreaterThan(-1);
});