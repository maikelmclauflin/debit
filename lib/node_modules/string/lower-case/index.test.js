var b = require('@timelaps/batterie');
var lowerCase = require('.');
b.describe('lowerCase', function () {
    b.expect(lowerCase).toBeFunction();
    b.expect(lowerCase).notToThrow();
    b.it('returns the result of the toLowerCase method', function (t) {
        t.expect(lowerCase('HALP')).toBe('halp');
        t.expect(lowerCase({
            toLowerCase: function () {
                return 'BEEP';
            }
        })).toBe('BEEP');
    }, 2);
});