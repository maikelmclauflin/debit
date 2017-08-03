var b = require('@timelaps/batterie');
var asciiWord = require('.');
b.describe('asciiWord', function () {
    b.expect(asciiWord).toBeInstance(RegExp);
    b.expect('words go here'.match(asciiWord)).toEqual(['words', 'go', 'here']);
});