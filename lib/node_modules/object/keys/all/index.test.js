var b = require('@timelaps/batterie');
var allKeys = require('.');
b.describe('keys.all', function () {
    b.expect(allKeys).toBeFunction();
    b.expect(allKeys()).toBeEmptyArray();
    b.expect(allKeys({
        a: 1
    })).toEqual(['a']);
    Class.prototype = {
        b: 2
    };
    b.expect(allKeys(new Class())).toEqual(['a', 'b']);
    b.expect(allKeys([1, 2])).toEqual(['0', '1']);

    function Class() {
        this.a = 1;
    }
});