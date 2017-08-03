var returnOrApply = require('.');
var b = require('@timelaps/batterie');
b.describe('returnOrApply', function () {
    b.expect(returnOrApply, 'toBeFunction');
    b.it('calls a fn if it is passed one', function (t) {
        var context = {};
        t.expect(returnOrApply(runner, context, [t, context])).toBeTrue();
    }, 2);
});

function runner(t, ctx) {
    t.expect(ctx).toBe(this);
    return true;
}