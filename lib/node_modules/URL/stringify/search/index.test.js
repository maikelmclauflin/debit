var b = require('@timelaps/batterie');
var stringifySearch = require('.');
b.describe('URL.stringify.search', function () {
    b.expect(stringifySearch).toBeFunction();
    b.expect(stringifySearch()).toBe('');
    b.expect(stringifySearch({})).toBe('');
    b.expect(stringifySearch({
        key: 'value'
    })).toBe('?key=value');
    b.expect(stringifySearch({
        key: 'cannot query'
    })).toBe('?key=cannot%20query');
});