var b = require('@timelaps/batterie');
var throttle = require('.');
b.describe('throttle', function () {
    b.async('forces a function to only be called once every X ms', function (t) {
        var counter = 0;
        var throttled = throttle(function () {
            counter++;
            if (counter > 4) {
                t.success();
            }
        }, 100);
        throttled();
        throttled();
        t.expect(counter).toBe(1);
        setTimeout(function () {
            t.expect(counter).toBe(1);
        });
        setTimeout(function () {
            t.expect(counter).toBe(2);
            throttled();
            setTimeout(function () {
                t.expect(counter).toBe(3);
                throttled();
                t.expect(counter).toBe(3);
            }, 70);
            setTimeout(function () {
                // finish him
                t.expect(counter).toBe(4);
                throttled();
            }, 200);
        }, 200);
    }, 6);
});