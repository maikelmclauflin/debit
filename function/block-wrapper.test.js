var blockWrapper = require('./block-wrapper');
var b = require('batterie');
b.describe('blockWrapper', function () {
    b.it('is a function', b.curry(blockWrapper, 'toBeFunction'));
    b.it('wraps blocks of code in a with statement', b.curry(blockWrapper(), 'toBe', 'with(this){\n\n}'));
    b.it('code can be passed into the block', b.curry(blockWrapper('console.log("now")'), 'toBe', 'with(this){\nconsole.log("now")\n}'));
    b.it('along with a different var for the context', b.curry(blockWrapper('console.log("now")', 'other'), 'toBe', 'with(other){\nconsole.log("now")\n}'));
});