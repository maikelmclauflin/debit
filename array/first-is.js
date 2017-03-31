module.exports = firstIs;
var nthIs = require('./nth-is');

function firstIs(array, final) {
    return nthIs(array, final, 0);
}