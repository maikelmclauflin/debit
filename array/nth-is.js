module.exports = nthIs;
var isStrictlyEqual = require('./utils/is/strictly-equal');
var nth = require('./utils/array/nth');

function nthIs(array, final, index) {
    return isStrictlyEqual(nth(array, index || 0), final);
}