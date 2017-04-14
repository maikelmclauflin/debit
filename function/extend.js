var isString = require('./utils/is/string');
var merge = require('./utils/object/merge');
var has = require('./utils/object/has');
var isInstance = require('./utils/is/instance');
var factory = require('./utils/function/factory');
var bind = require('./utils/function/bind');
var PROTOTYPE = 'prototype';
var CONSTRUCTOR = 'constructor';
var FCC = Function[CONSTRUCTOR];
var EXTEND = 'extend';
var isValue = require('./utils/is/value');
var DOUBLE_UNDERSCORE = '__';
var COLON = ':';
var toArray = require('./utils/to/array');
var isOf = require('./utils/is/of');
var bindTo = require('./utils/function/bind-to');
var CONSTRUCTOR_KEY = DOUBLE_UNDERSCORE + CONSTRUCTOR + DOUBLE_UNDERSCORE;
var createFrom = require('./utils/object/create-from');
constructorExtend.wrapper = constructorWrapper;
module.exports = constructorExtend;

function constructorWrapper(Constructor) {
    __.isInstance = Constructor.isInstance = function (instance) {
        return isInstance(instance, Constructor);
    };
    __.factory = Constructor.factory = factory;
    __.fn = Constructor.fn = Constructor[PROTOTYPE].fn = Constructor[PROTOTYPE];
    __.constructor = Constructor;
    __[EXTEND] = Constructor[EXTEND] = bind(constructorExtend, Constructor);
    return __;

    function __(one, two, three, four, five, six) {
        return isValue(one) && isOf(one, Constructor) ? one : new Constructor(one, two, three, four, five, six);
    }
}

function constructorExtend(name_, protoProps) {
    var options, nameString, constructorKeyName, child, passedParent, hasConstructor, constructor, parent = this,
        name = name_,
        origin = !parent.fn,
        nameIsStr = isString(name);
    if (!nameIsStr) {
        protoProps = name;
        name = null;
    }
    hasConstructor = has(protoProps, CONSTRUCTOR);
    if (protoProps && hasConstructor) {
        child = protoProps[CONSTRUCTOR];
    }
    options = {
        toArray: toArray,
        bindTo: bindTo,
        parent: parent,
        supr: this
    };
    constructorString = 'return function ' + (name || this.name) + '(){var args = [' + (origin ? '' : '_.bindTo(_.supr, this)') + '].concat(_.toArray(arguments));return _.parent.apply(this, args);}';
    if (nameIsStr) {
        passedParent = parent;
        if (child) {
            passedParent = child;
        }
        child = fcc(constructorString, this, parent);
    } else {
        child = (origin ? parent : child || fcc(constructorString, this, parent));
    }
    child[EXTEND] = constructorExtend;
    var Surrogate = function () {
        this[CONSTRUCTOR] = child;
    };
    Surrogate[PROTOTYPE] = parent[PROTOTYPE];
    child[PROTOTYPE] = merge(createFrom(Surrogate), protoProps);
    // don't call the function if nothing exists
    constructor = child;
    child = constructorWrapper(constructor);
    constructor[PROTOTYPE][CONSTRUCTOR_KEY] = child;
    return child;
}

function fcc(string, supr, parent) {
    return new FCC('_', string)({
        toArray: toArray,
        bindTo: bindTo,
        parent: parent,
        supr: supr
    });
}