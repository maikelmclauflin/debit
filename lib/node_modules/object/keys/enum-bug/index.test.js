var enumBug = require('.');
var b = require('@timelaps/batterie');
b.describe('enumBug', function () {
    b.expect(enumBug).toBeBoolean();
});