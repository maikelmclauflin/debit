var b = require('batterie');
var toggle = require('./toggle');
b.describe('toggle', function () {
    b.it('will return the opposite of whatever it is passed', [
        ['so for true, false', toggle(true), false],
        ['for truthy, false', toggle(1), false],
        ['for false, true', toggle(false), true],
        ['for falsey, true', toggle(0), true],
        ['but can also be directed with a secondary parameter', toggle(0, false), false]
    ]);
});