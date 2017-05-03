var b = require('batterie');
var parse = require('./parse');
b.describe('parseJSON', function () {
    b.expect(parse, 'toBeFunction');
    b.expect(function () {
        parse();
    }, 'toThrow');
    b.expect(parse('{}'), 'toEqual', {});
    b.expect(parse('[]'), 'toEqual', []);
});