module.exports = keys;
var isPointer = require('@timelaps/is/pointer');
var own = require('object/keys/own');
keys.own = own;
keys.all = require('object/keys/all');
keys.native = require('object/keys/native');
keys.ENUM_BUG = require('object/keys/enum-bug');

function keys(obj) {
    // just an optimized path for own
    if (!isPointer(obj)) {
        return [];
    }
    return own(obj);
}