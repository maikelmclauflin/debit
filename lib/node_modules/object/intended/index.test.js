var b = require('@timelaps/batterie');
var intendedObject = require('.');
b.describe('intendedObject', function () {
    b.expect(intendedObject).toBeFunction();
    b.expect(function () {
        intendedObject();
    }).toThrow();
    b.it('needs a function passed as the 3rd param', function (t) {
        t.expect(function () {
            intendedObject(null, null, function () {});
        }).notToThrow();
    });
    b.it('iterates over objects', function (t) {
        var passed = {
            a: 1,
            b: 2
        };
        intendedObject(passed, null, function (key, value, obj) {
            t.expect(value).toBe(obj[key]);
            t.expect(obj).toBe(passed);
        });
    }, 4);
});