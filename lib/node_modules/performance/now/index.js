module.exports = function (global) {
    var performance = require('performance')(global, true);
    var time = require('time');
    var now = time.now;
    if (!performance.now) {
        performance.now = (global.process ? (function () {
            var uptime = process.uptime;
            return function () {
                return uptime() / 1000;
            };
        }()) : (performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || (function () {
            var then = time.offset;
            return function () {
                return now() - then;
            };
        }())));
    }
    return applied;

    function applied() {
        return performance.now();
    }
};