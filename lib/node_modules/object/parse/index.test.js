var parse = require('.');
var b = require('@timelaps/batterie');
b.describe('parse', function () {
    b.expect(parse).toBeFunction();
    b.expect(parse()).toBeUndefined();
    b.it('it to leave strings alone', function (t) {
        t.expect(parse('')).toBe('');
        t.expect(parse('{a}')).toBe('{a}');
    }, 2);
    b.it('will coerce a number if that is all the string is', function (t) {
        t.expect(parse('5')).toBe(5);
    });
    b.it('will parse json if it can', function (t) {
        t.expect(parse('[1]')).toEqual([1]);
        t.expect(parse('{"a":1}')).toEqual({
            a: 1
        });
    }, 2);
    b.it('will create a function if it can', function (t) {
        t.expect(parse('function (){}')).toBeFunction();
    });
});