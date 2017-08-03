var isMatch = require('.');
var b = require('@timelaps/batterie');
b.describe('isMatch', function () {
    b.expect(isMatch, 'toBeFunction');
    b.expect(isMatch({}, {}), 'toBeTrue');
    b.expect(isMatch({}, null), 'toBeTrue');
    b.expect(isMatch({
        one: 1,
        two: 2
    }, null), 'toBeTrue');
    b.expect(isMatch({
        two: 2,
        one: 1
    }, {
        two: 2
    }), 'toBeTrue');
    b.expect(isMatch({
        two: 2,
        one: 1
    }, {
        two: 1
    }), 'toBeFalse');
});