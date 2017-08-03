var b = require('@timelaps/batterie');
var invert = require('.');
b.describe('invert', function () {
    b.expect(invert).toBeFunction();
    b.expect(invert()).toBeEmpty();
    b.expect(invert({
        a: 1
    })).toEqual({
        '1': 'a'
    });
    b.expect(invert({
        a: 1,
        b: 3
    })).toEqual({
        '1': 'a',
        '3': 'b'
    });
});