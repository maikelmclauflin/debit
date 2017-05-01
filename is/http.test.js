var isHttp = require('./http');
var b = require('batterie');
b.describe('isHttp', function () {
    b.expect(isHttp, 'toBeFunction');
    b.expect(isHttp(), 'toBeFalse');
    b.expect(function () {
        isHttp(1);
    }, 'toThrow');
    b.expect(isHttp('//'), 'toBeTrue');
    b.expect(isHttp('http://'), 'toBeTrue');
    b.expect(isHttp('https://'), 'toBeTrue');
    b.expect(isHttp('https://fake.com'), 'toBeTrue');
});