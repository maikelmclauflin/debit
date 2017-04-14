module.exports = createFrom;
var merge = require('./utils/object/merge');
var create = require('./utils/object/create');
var isFunction = require('./utils/is/function');

function createFrom(Constrktr) {
    if (isFunction(Constrktr)) {
        return new Constrktr;
    } else {
        return create(Constrktr);
    }
}