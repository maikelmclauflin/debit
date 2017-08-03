var b = require('@timelaps/batterie');
var ownKeys = require('.');
b.log(ownKeys());
b.describe('ownKeys', function () {
    b.expect(ownKeys).toBeFunction();
    b.expect(ownKeys()).toBeEmpty();
    b.expect(ownKeys()).toBeArray();
    Class.prototype = {
        b: 2
    };
    b.expect(ownKeys(new Class())).toEqual(['a']);

    function Class() {
        this.a = 1;
    }
});