var stringifyURL = require('.');
var b = require('@timelaps/batterie');
b.describe('URL.stringify', function () {
    b.expect(stringifyURL).toBeFunction();
    b.it('stringifies location values for easier url creation', function (t) {
        t.expect(stringifyURL({
            protocol: 'https:',
            host: 'google.com',
            pathname: '/path/2/',
            search: {
                key: 'impossible search'
            },
            hash: {}
        })).toBe('https://google.com/path/2/?key=impossible%20search#{}');
    });
});