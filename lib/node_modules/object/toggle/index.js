module.exports = toggle;
var isUndefined = require('@timelaps/is/undefined');
var cast = require('@timelaps/hacks/to-boolean');

function toggle(current, which) {
    return isUndefined(which) ? !current : cast(which);
}