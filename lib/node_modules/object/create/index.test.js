var b = require('@timelaps/batterie');
var create = require('.');
b.describe('create', function () {
    b.expect(create).toBeFunction();
    b.expect(function () {
        create();
    }).toThrow();
    b.expect(function () {
        create({});
    }).notToThrow();
    b.expect(create({})).toEqual({});
    // var proto = {
    //     one: {
    //         value: 1
    //     }
    // };
    // b.expect(create({}, proto)).toEqual({});
});