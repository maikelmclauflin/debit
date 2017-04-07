var toNumber = require('./utils/to/number');
var date = require('./utils/date');
module.exports = dateNumber;

function dateNumber() {
    return toNumber(date());
}