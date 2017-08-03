var get = require('.');
var b = require('@timelaps/batterie');
b.describe('get', function () {
    b.expect(get).toBeFunction();
    b.expect(get()).toBeUndefined();
    b.expect(get({
        a: {
            b: false
        }
    }, 'a.b')).toBeFalse();
    b.expect(get({
        a: {
            b: [{
                c: false
            }]
        }
    }, 'a.b[0].c')).toBeFalse();
});