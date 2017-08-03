var matches = require('object/matches');
var property = require('object/property');
var isObject = require('@timelaps/is/object');
var isFunction = require('@timelaps/is/function');
var isArray = require('@timelaps/is/array');
var matchesProperty = require('object/matches/property');
module.exports = toIterable;

function toIterable(iteratee) {
    return isFunction(iteratee) ? iteratee : (isArray(iteratee) ? matchesProperty(iteratee) : (isObject(iteratee) ? matches(iteratee) : property(iteratee)));
}