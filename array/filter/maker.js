var stringConcat = require('./utils/string/concat');
var returnsEmptyString = require('./utils/returns/empty-string');
var objectSet = require('./utils/object/set');
var returnsObject = require('./utils/returns/object');
var returnsArray = require('./utils/returns/array');
var arrayPush = require('./utils/array/push');
var filterCommon = require('./utils/array/filter/common');
var negatableFilter = require('./utils/array/filter/negatable');
module.exports = negatableFilter(filterCommon(returnsArray, function (array, item) {
    return array.push(item);
}), filterCommon(returnsObject, objectSet), filterCommon(returnsEmptyString, stringConcat));