var parse = require('object/parse');
module.exports = parseHash;

function parseHash(hash) {
    return parse(decodeURIComponent(hash[0] === '#' ? hash.slice(1) : hash));
}