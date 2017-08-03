var isArray = require('@timelaps/is/array');
var isArrayLike = require('@timelaps/is/array-like');
var isString = require('@timelaps/is/string');
var COMMA = ',';
toArray.fromArrayLike = arrayLikeToArray;
module.exports = toArray;

function toArray(object, delimiter) {
    return isArrayLike(object) ? (isArray(object) ? object : arrayLikeToArray(object)) : (isString(object) ? object.split(isString(delimiter) ? delimiter : COMMA) : [object]);
}

function arrayLikeToArray(arrayLike) {
    return arrayLike.length === 1 ? [arrayLike[0]] : Array.apply(null, arrayLike);
}