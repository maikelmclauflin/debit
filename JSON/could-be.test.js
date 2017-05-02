var b = require('batterie');
var couldBe = require('./could-be');
b.describe('couldBeJSON', function () {
    b.expect(couldBe, 'toBeFunction');
    b.expect(couldBe(), 'toBeFalse');
    b.expect(couldBe(''), 'toBeFalse');
    b.expect(couldBe('['), 'toBeFalse');
    b.expect(couldBe('}'), 'toBeFalse');
    b.expect(couldBe('[]}'), 'toBeFalse');
    b.expect(couldBe('{[]}'), 'toBeTrue');
    b.expect(couldBe('[{}]'), 'toBeTrue');
});