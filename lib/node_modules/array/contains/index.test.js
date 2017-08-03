var b = require('@timelaps/batterie');
var contains = require('.');
var obj1 = {};
var obj2 = {};
var obj3 = {};
var obj4 = {};
var objects = [obj1, null, obj2, NaN, 5, obj1, obj4, obj3];
b.describe('contains', function () {
    b.it('checks arrays and array like objects', [
        ['for objects', contains(objects, obj2), true],
        ['any value', contains(objects, null), true],
        ['NaN included', contains(objects, NaN), true],
        ['even array like objects', contains({
            '0': 5,
            '1': obj1,
            '2': obj2,
            '3': null,
            length: 4
        }, obj2), true]
    ]);
});