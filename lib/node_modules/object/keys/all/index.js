var checkCollectNonEnumProps = require('object/collect-non-enum-props/check');
var forloop = require('object/base/for');
module.exports = function (obj) {
    var keys = [];
    forloop(obj, function (key) {
        keys.push(key);
    });
    return checkCollectNonEnumProps(obj, keys);
};