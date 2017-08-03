var b = require('@timelaps/batterie');
var parse = require('.');
b.describe('parseURL', function () {
    b.expect(parse).toBeFunction();
    b.it('returns empties when nothing is passed', function (t) {
        t.expect(parse()).toEqual({
            host: '',
            hostname: '',
            port: '',
            protocol: '',
            search: '',
            hash: '',
            pathname: ''
        });
    });
    b.it('parses complex urls', function (t) {
        t.expect(parse('https://gospecless.com:8080/assets/images/some.svg?query=string#html-id')).toEqual({
            host: 'gospecless.com:8080',
            hostname: 'gospecless.com',
            port: ':8080',
            protocol: 'https:',
            hash: '#html-id',
            search: '?query=string',
            pathname: '/assets/images/some.svg'
        });
    });
    b.it('will leave the simple stuff blank when there is not enough information', function (t) {
        t.expect(parse('gospecless.com')).toEqual({
            host: 'gospecless.com',
            hostname: 'gospecless.com',
            port: '',
            protocol: '',
            hash: '',
            search: '',
            pathname: ''
        });
        t.expect(parse('ws://gospecless.com/route/2')).toEqual({
            host: 'gospecless.com',
            hostname: 'gospecless.com',
            port: '',
            protocol: 'ws:',
            hash: '',
            search: '',
            pathname: '/route/2'
        });
        t.expect(parse('//gospecless.com?search=param')).toEqual({
            host: 'gospecless.com',
            hostname: 'gospecless.com',
            port: '',
            protocol: '',
            hash: '',
            search: '?search=param',
            pathname: ''
        });
        t.expect(parse('gospecless.com:8080?search=param')).toEqual({
            host: 'gospecless.com:8080',
            hostname: 'gospecless.com',
            port: ':8080',
            protocol: '',
            hash: '',
            search: '?search=param',
            pathname: ''
        });
    }, 4);
});