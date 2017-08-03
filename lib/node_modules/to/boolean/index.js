var baseTypes = require('@timelaps/constants/base-types'),
    castBoolean = require('@timelaps/hacks/to-boolean'),
    isUndefined = require('@timelaps/is/undefined');
module.exports = function toBoolean(thing) {
    var value;
    if (!isUndefined((value = baseTypes[thing]))) {
        return !!value;
    }
    return castBoolean(thing);
};