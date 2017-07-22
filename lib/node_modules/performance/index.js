var now = require('./now');
module.exports = function (global, adding) {
    var PERFORMANCE = 'performance';
    var perf = global[PERFORMANCE] = global[PERFORMANCE] || {};
    if (!adding && !perf.now) {
        now(global);
    }
    return perf;
};