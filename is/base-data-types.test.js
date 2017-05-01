var baseDataTypes = require('./base-data-types');
var b = require('batterie');
b.describe('baseDataTypes', function () {
    b.expect(baseDataTypes, 'toBeObject');
    b.expect(baseDataTypes.null, 'toBeNull');
    b.expect(baseDataTypes.hasOwnProperty('undefined'), 'toBeTrue');
    b.expect(baseDataTypes.false, 'toBeFalse');
    b.expect(baseDataTypes.true, 'toBeTrue');
});