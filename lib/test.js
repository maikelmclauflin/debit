(function () {
    'use strict';
    var b = require('@timelaps/batterie');
    b.capture(function () {
        require('./tests');
    });
    b.finish().then(b.logger());
}());