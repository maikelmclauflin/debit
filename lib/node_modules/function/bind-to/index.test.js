(function () {
    var b = require('@timelaps/batterie');
    var bindTo = require('.');
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