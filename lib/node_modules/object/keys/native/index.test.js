var b = require('@timelaps/batterie');
var nativeKeys = require('.');
b.describe('nativeKeys', function () {
    var keys = Object.keys;
    b.expect(nativeKeys).toEqual(keys);
});