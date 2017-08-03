var forIn = require('.');
var b = require('@timelaps/batterie');
b.describe('forIn', function () {
    Class.prototype = {
        one: 0,
        two: 2,
        three: 3
    };
    b.expect(forIn).toBeFunction();
    b.expect(forIn()).toBeUndefined();
    b.it('iterates over objects and any available keys on the prototype', function (t) {
        var previous = 0;
        var values = [];
        var indexes = [];
        forIn(new Class(), function (value, index) {
            values.push(value);
            indexes.push(index);
        });
        t.expect(values).toEqual([3, 2, 1]);
        t.expect(indexes).toEqual(['three', 'two', 'one']);
    }, 2);

    function Class() {
        this.one = 1;
    }
});