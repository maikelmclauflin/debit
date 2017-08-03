var b = require('@timelaps/batterie');
var parse = require('.');
b.describe('parseJSON', function () {
    b.expect(parse, 'toBeFunction');
    b.expect(function () {
        parse();
    }, 'toThrow');
    b.expect(parse('{}'), 'toEqual', {});
    b.expect(parse('[]'), 'toEqual', []);
});