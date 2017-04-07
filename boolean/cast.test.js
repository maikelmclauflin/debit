var b = require('batterie');
var castBoolean = require('./cast');
b.describe('castBoolean', function () {
    b.it('is simply a function for a double bang', [
        ['any truthy value comes out true', [
            [castBoolean(1), true],
            [castBoolean(Infinity), true],
            [castBoolean(-Infinity), true],
            [castBoolean('0'), true],
            [castBoolean(true), true],
            [castBoolean(-1), true],
            [castBoolean({}), true],
            [castBoolean([]), true],
            [castBoolean(function () {}), true]
        ]],
        ['and falsey values come out false', [
            [castBoolean(0), false],
            [castBoolean(), false],
            [castBoolean(null), false],
            [castBoolean(false), false],
            [castBoolean(''), false]
        ]]
    ]);
});