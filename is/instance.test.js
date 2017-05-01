var isInstance = require('./instance');
var b = require('batterie');
b.describe('isInstance', function () {
    b.expect(isInstance, 'toBeFunction');
    b.expect(isInstance(), 'toBeFalse');
    b.expect(isInstance(new Class(), Class), 'toBeTrue');
    b.expect(isInstance({}, Class), 'toBeFalse');

    function Class() {}
});