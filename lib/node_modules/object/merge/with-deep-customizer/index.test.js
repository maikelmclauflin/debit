var b = require('@timelaps/batterie');
var withDeepCustomizer = require('.');
b.describe('withDeepCustomizer', function () {
    b.expect(withDeepCustomizer).toBeFunction();
    b.it('uses merge arguments to assign / update values', function (t) {
        var obj = {};
        withDeepCustomizer(1, 2, 'a', obj, {}, []);
        t.expect(obj).toEqual({
            a: 2
        });
    });
    b.it('will continue by itself if it finds objects', function (t) {
        var obj = {};
        var next = {
            b: {
                c: 3
            }
        };
        withDeepCustomizer({
            b: {
                c: 2
            }
        }, next, 'a', obj, {}, []);
        t.expect(obj).toEqual({
            a: {
                b: {
                    c: 3
                }
            }
        });
    });
});