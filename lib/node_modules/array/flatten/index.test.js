var b = require('@timelaps/batterie');
var flatten = require('.');
b.it('flatten', [
    ['should flatten arrays, like a concat', flatten([
        [1],
        [2],
        [3]
    ]), [1, 2, 3]],
    ['but only to one layer', flatten([
        [
            [{}]
        ],
        [
            [{}]
        ],
        [
            [{}]
        ]
    ]), [
        [{}],
        [{}],
        [{}]
    ]]
]);