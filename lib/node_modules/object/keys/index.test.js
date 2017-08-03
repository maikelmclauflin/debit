var b = require('@timelaps/batterie');
var keys = require('.');
var create = require('object/create');
b.describe('keys', function () {
    b.expect(keys).toBeFunction();
    b.it('gathers keys using the most optimal route', function (t) {
        t.expect(keys({})).toEqual([]);
    });
    b.it('will only gather own', function (t) {
        Class.prototype = {
            c: 3,
            d: 4
        };
        t.expect(keys(new Class()).sort()).toEqual(['a', 'b']);

        function Class() {
            this.a = 1;
            this.b = 1;
        }
    });
});