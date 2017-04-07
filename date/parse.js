module.exports = parseDate;
var isString = require('./utils/is/string');
var isOf = require('./utils/is/of');
var toNumber = require('./utils/to/number');
var defaultDatetime = require('./utils/date/default');

function parseDate(value_) {
    var value = value_;
    if (!isString(value)) {
        if (isOf(value, Date) && !isNaN(toNumber(value))) {
            value = value.toISOString();
        } else {
            return defaultDatetime();
        }
    }
    return new Date(value);
}