var b = require('@timelaps/batterie');
var unicodeWord = require('.');
b.describe('unicodeWord', function () {
    b.expect(unicodeWord).toBeInstance(RegExp);
    b.expect('words go here'.match(unicodeWord)).toEqual(['words', 'go', 'here']);
});