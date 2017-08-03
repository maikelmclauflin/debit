var b = require('@timelaps/batterie');
var b = require('@timelaps/batterie');
var flattenSelectively = require('.');
b.it('flattenSelectively', [
    ['to selectively flatten simply pass a function', flattenSelectively([
        [1, 2],
        [3, 4],
        [5, 6]
    ], function (item) {
        return item[0] > 4;
    }), [
        [1, 2],
        [3, 4], 5, 6
    ]]
]);