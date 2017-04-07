module.exports = toggle;
var isUndefined = require('./utils/is/undefined');
var castBoolean = require('./utils/boolean/cast');

function toggle(current, which) {
    return isUndefined(which) ? !current : castBoolean(which);
}