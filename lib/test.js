(function () {
    'use strict';
    var b = require('batterie');
    b.capture(function () {
        require('./tests');
    });
    b.finish().then(b.logger());
}());