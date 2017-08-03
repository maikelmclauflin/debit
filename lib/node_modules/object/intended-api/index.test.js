var b = require('@timelaps/batterie');
var intendedObjectApi = require('.');
b.describe('intendedObjectApi', function () {
    b.expect(intendedObjectApi).toBeFunction();
    b.expect(function () {
        intendedObjectApi()();
    }).toThrow();
    b.it('needs a function passed', function (t) {
        t.expect(function () {
            intendedObjectApi(function () {})();
        }).notToThrow();
    });
    b.it('convenience function for apis', function (t) {
        var api = {
            method: intendedObjectApi(function (key, value) {
                t.expect(value).toEqual(obj[key]);
            })
        };
        var obj = {
            a: 1,
            b: 2,
            c: 3
        };
        api.method(obj);
    }, 3);
    b.it('iterates over objects', function (t) {
        var passed = {
            a: 1,
            b: 2
        };
        var api = {
            method: intendedObjectApi(function (key, value, obj) {
                t.expect(value).toBe(obj[key]);
                t.expect(obj).toBe(passed);
            })
        };
        api.method(passed);
    }, 4);
});