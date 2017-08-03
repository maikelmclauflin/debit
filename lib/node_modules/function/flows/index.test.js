var flows = require('.');
var b = require('@timelaps/batterie');
var context = {
    square: function (num) {
        return num * num;
    },
    addOne: function (num) {
        return num + 1;
    }
};
b.describe('flows', function () {
    b.it('is a function', b.curry(flows, 'toBeFunction'));
    b.it('returns a function', b.curry(flows(), 'toBeFunction'));
    b.it('calls one function and passes the result into another', b.curry(flows(function (arg) {
        return arg * arg;
    }, function (arg) {
        return arg + 1;
    })(3), 'toBe', 10));
    b.it('can also call them from a context', b.curry(flows('square', 'addOne').call(context, 3), 'toBe', 10));
});