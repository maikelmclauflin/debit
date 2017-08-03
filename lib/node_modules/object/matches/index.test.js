var matches = require('.');
var b = require('@timelaps/batterie');
b.describe('matches', function () {
    b.expect(matches).toBeFunction();
    b.expect(matches()).toBeFunction();
    b.expect(matches()()).toBeTrue();
    b.it('can match subsets of objects', function (t) {
        var matcher = matches({
            a: ''
        });
        t.expect(matcher({
            a: '',
            b: null
        })).toBeTrue();
    });
});