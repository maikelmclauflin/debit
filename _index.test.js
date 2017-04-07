var b = require('batterie');
require('./index.test');
require('./array/_index.test');
require('./boolean/_index.test');
require('./default-to/_index.test');
require('./function/_index.test');
b.finish().then(b.logger());