var has = require('object/has');
var checkCollectNonEnumProps = require('object/collect-non-enum-props/check');
var forloop = require('object/base/for');
var native = require('object/keys/native');
var isObject = require('@timelaps/is/object');
module.exports = native ? function (obj) {
    // prevent throwing
    return isObject(obj) ? native(obj) : [];
} : own;

function own(obj) {
    var keys = [];
    forloop(obj, function (key, obj) {
        if (has(obj, key)) {
            keys.push(key);
        }
    });
    return checkCollectNonEnumProps(obj, keys);
}