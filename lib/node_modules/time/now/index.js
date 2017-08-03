module.exports = timeNumber;
var toNumber = require('@timelaps/hacks/to-number');
var time = require('time/make');

function timeNumber() {
    return toNumber(time());
}