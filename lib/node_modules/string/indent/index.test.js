var b = require('@timelaps/batterie');
var indent = require('.');
b.describe('indent', function () {
    b.expect(indent).toBeFunction();
    b.expect(indent).toThrow();
    b.it('adds characters after line breaks', function (t) {
        var result = indent('// some text\n// goes here', '\t');
        t.expect(result).toEqual('\t// some text\n\t// goes here');
    });
    b.it('does nothing by default', function (t) {
        var string = '// some text\n// goes here';
        t.expect(indent(string)).toEqual(string);
    });
});