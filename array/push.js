module.exports = push;
var arrayPush = [].push;
var toArray = require('./utils/to/array');

function push(array, list) {
    return arrayPush.apply(array, toArray(list));
}