var b = require('@timelaps/batterie');
var defer = require('.');
b.describe('defer', function () {
    b.async('pushes functions back', function (t) {
        var olddate = new Date();
        var counter = 0;
        var deferred = defer(function () {
            t.expect(+olddate + 1000).toBeLessThan(+(new Date()));
            t.success();
        }, 100);
        deferred();
        asynch();

        function asynch() {
            setTimeout(function () {
                deferred();
                counter++;
                if (counter < 30) {
                    asynch();
                }
            }, 50);
        }
    });
});