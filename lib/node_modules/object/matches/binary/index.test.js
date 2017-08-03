var b = require('@timelaps/batterie');
var matchesBinary = require('.');
b.describe('matches.binary', function () {
    b.expect(matchesBinary).toBeFunction();
    b.expect(matchesBinary).toReturnFunction();
    b.it('allows you to create a curried function to match whatever is passed to it', function (t) {
        var matcher = matchesBinary(null);
        t.expect(matcher()).toBeTrue();
        t.expect(matcher(1)).toBeFalse();
    }, 2);
});