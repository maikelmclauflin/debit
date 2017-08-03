var b = require('@timelaps/batterie');
var matchesProperty = require('.');
b.describe('matches.property', function () {
    b.expect(matchesProperty).toBeFunction();
    b.expect(matchesProperty([])).toBeFunction();
    b.it('matches from a single property', function (t) {
        var matcher = matchesProperty(['a', 1]);
        t.expect(matcher({
            a: 2
        })).toBeFalse();
        t.expect(matcher({
            a: 1
        })).toBeTrue();
    }, 2);
});