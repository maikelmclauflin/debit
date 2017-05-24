var mergeWith = require('object/merge/with');
var shallowMergeWithCustomizer = require('object/merge/with-shallow-customizer');
module.exports = Object.assign || assign;

function assign(obj1, obj2) {
    return mergeWith(obj1, obj2, shallowMergeWithCustomizer);
}