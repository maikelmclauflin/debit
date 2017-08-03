module.exports = parse;
var isNotNan = require('@timelaps/is/not-nan');
var isString = require('@timelaps/is/string');
var wraptry = require('function/wrap-try');
var couldBeJSON = require('@timelaps/json/could-be');
var JSONParse = require('@timelaps/json/parse');
var toNumber = require('@timelaps/hacks/to-number');
var has = require('object/has');
var TYPES = require('@timelaps/constants/base-types');
var evaluate = require('function/evaluate');

function parse(val_) {
    var valTrimmed, valLength, coerced, val = val_;
    if (!isString(val)) {
        // already parsed
        return val;
    }
    val = valTrimmed = val.trim();
    valLength = val.length;
    if (!valLength) {
        return val;
    }
    if (has(TYPES, val)) {
        return TYPES[val];
    }
    coerced = toNumber(val);
    if (isNotNan(coerced)) {
        return coerced;
    }
    if (couldBeJSON(val)) {
        if ((val = wraptry(function () {
                return JSONParse(val);
            }, function () {
                return val;
            })) !== valTrimmed) {
            return val;
        }
    }
    if (val.slice(0, 8) === 'function' && val[val.length - 1] === '}') {
        return evaluate('return ' + val);
    }
    return val;
}