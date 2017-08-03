module.exports = set;
var u,
    toPath = require('to/path'),
    isArray = require('@timelaps/is/array'),
    forEachEnd = require('array/base/for-each-end'),
    isNil = require('@timelaps/is/nil'),
    isPointer = require('@timelaps/is/pointer');

function set(target_, path) {
    var p, length, target = target_;
    if (!target) {
        return u;
    }
    p = isArray(path) ? path : toPath(path);
    length = p.length;
    if (length > 1) {
        return forEachEnd(p, function traverser(key, index, list) {
            if (isNil(target)) {
                return true;
            } else if (index < list.length - 1) {
                target = target[key];
            } else if (isPointer(target)) {
                return delete target[key];
            }
        });
    } else if (length && isPointer(target)) {
        return delete target[p[0]];
    } else {
        return false;
    }
}