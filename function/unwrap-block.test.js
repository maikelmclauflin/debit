var unwrapBlock = require('./unwrap-block');
var b = require('batterie');
b.describe('unwrapBlock', function () {
    b.expect(unwrapBlock, 'toBeFunction');
    b.it('needs a function to be passed to it', function (t) {
        t.expect(unwrapBlock).toThrow();
    });
    b.it('unwraps function blocks', function (t) {
        t.expect(unwrapBlock(function () {})).toBe('');
        t.expect(unwrapBlock(function () {
            console.log("here");
        })).toBe('\n            console.log("here");\n        ');
    }, 2);
});