var collectNonEnumProps = require('.');
var b = require('@timelaps/batterie');
b.describe('collectNonEnumProps', function () {
    Class.prototype = {
        a: function () {},
        b: function () {}
    };
    var keys = [];
    b.expect(collectNonEnumProps).toBeFunction();
    collectNonEnumProps(new Class(), keys);
    b.expect(keys).toEqual([]);

    function Class() {}
});