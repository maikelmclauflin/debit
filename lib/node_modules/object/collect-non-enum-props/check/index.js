var ENUM_BUG = require('object/keys/enum-bug');
var collectNonEnumProps = require('object/collect-non-enum-props');
module.exports = check;

function check(obj, keys) {
    // Ahem, IE < 9.
    if (ENUM_BUG) {
        collectNonEnumProps(obj, keys);
    }
    return keys;
}