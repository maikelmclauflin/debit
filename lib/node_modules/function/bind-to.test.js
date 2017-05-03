(function () {
    var b = require('batterie');
    var bindTo = require('./bind-to');
    b.describe('bindTo', function () {
        var obj = {};
        b.it('binds functions', [
            ['only when the contexts exits', bindTo(context)(), global],
            ['when the context is truthy', bindTo(context, obj)(), obj]
        ]);
    });

    function context() {
        return this;
    }
}());