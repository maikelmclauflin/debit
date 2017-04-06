module.exports = results;
var map = require('./utils/array/map');
var result = require('./utils/function/result');

function results(array, method, arg) {
    return map(array, resultCaller);

    function resultCaller(item) {
        return result(item, method, arg);
    }
}