var b = require('batterie');
require('./index.test');
require('./array/_index.test');
b.finish().then(b.logger());