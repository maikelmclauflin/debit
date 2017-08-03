var b = require('@timelaps/batterie');
var findOwn = require('.');
b.describe('findOwn', function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    Class.prototype = {
        one: 5,
        two: 10,
        three: 15,
        four: 20
    };

    function Class() {
        this.one = 1;
        this.two = 2;
        this.five = 'fiver';
    }
    b.it('is a function', function (t) {
        t.expect(findOwn).toBeFunction();
    });
    b.it('iterates through lists in reverse', function (t) {
        var list = [];
        findOwn(numbers, function (value) {
            list.push(value);
        });
        t.expect(list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    b.it('can be stopped by returning a truthy value', function (t) {
        var list = [];
        var value = findOwn(numbers, function (number) {
            list.push(number);
            return number === 5;
        });
        t.expect(value).toEqual(5);
        t.expect(list).toEqual([1, 2, 3, 4, 5]);
    }, 2);
    b.it('works with objects', function (t) {
        var keys = [];
        var value = findOwn(new Class(), function (number, key) {
            keys.push(key);
        });
        t.expect(value).toBeUndefined();
        t.expect(keys.indexOf('one')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('two')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('three')).toBe(-1);
        t.expect(keys.indexOf('four')).toBe(-1);
        t.expect(keys.indexOf('five')).toBeGreaterThan(-1);
    }, 6);
    b.it('can also stop early when iterating over an object', function (t) {
        var keys = [];
        var value = findOwn(new Class(), function (value, key) {
            keys.push(key);
            return value === 2;
        });
        t.expect(keys.length).notToBeGreaterThan(3);
        t.expect(value).toBe(2);
    }, 2);
});