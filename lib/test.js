(function () {
    'use strict';
    var b = require('batterie');
    require('./tests');
    b.finish().then(b.logger());
}());