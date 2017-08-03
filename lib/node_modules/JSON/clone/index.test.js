var b = require('@timelaps/batterie');
var clone = require('.');
b.describe('cloneJSON', function () {
    b.expect(clone, 'toBeFunction');
    b.expect(function () {
        clone();
    }, 'toThrow');
    b.expect(function () {
        clone({});
    }, 'notToThrow');
    var obj = {};
    b.expect(clone(obj), 'notToBe', obj);
    b.expect(clone(obj), 'toEqual', obj);
    b.expect(clone({
        toJSON: function () {
            return [];
        }
    }), 'toEqual', []);
});