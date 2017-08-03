var b = require('@timelaps/batterie');
var couldBe = require('.');
b.describe('couldBeJSON', function () {
    b.expect(couldBe).toBeFunction();
    b.expect(couldBe()).toBeFalse();
    b.expect(couldBe('')).toBeFalse();
    b.expect(couldBe('[')).toBeFalse();
    b.expect(couldBe('}')).toBeFalse();
    b.expect(couldBe('[]}')).toBeFalse();
    b.expect(couldBe('{[]}')).toBeTrue();
    b.expect(couldBe('[{}]')).toBeTrue();
});