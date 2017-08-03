var b = require('@timelaps/batterie');
var has = require('.');
b.describe('has', function () {
    b.expect(has).toBeFunction();
    b.expect(has()).toBeFalse();
    b.expect(has({
        here: undefined
    }, 'here')).toBeTrue();
    Class.prototype = {
        here: true
    };
    var special = new Class();
    b.expect(has(special, 'here')).toBeFalse();

    function Class() {}
});