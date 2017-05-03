module.exports = recreate();

function recreate() {
    var FIND = 'find';
    var FIND_KEY = FIND + 'Key';
    var buildMethods = require('function/build');
    var isStrictlyEqual = require('is/strictly-equal');
    var merge = require('object/merge');
    var capitalize = require('string/capitalize');
    var mapKeys = require('array/map/keys');
    var returns = require('returns/passed');
    var extend = require('object/extend');
    var forEach = require('array/for/each');
    var forEachRight = require('array/for/each-right');
    var forOwn = require('object/for-own');
    var forOwnRight = require('object/for-own-right');
    var forIn = require('object/for-in');
    var forInRight = require('object/for-in-right');
    var map = require('array/map');
    var mapRight = require('array/map/right');
    var mapValues = require('array/map/values');
    var mapValuesRight = require('array/map/values-right');
    var mapKeysRight = require('array/map/keys-right');
    var find = require('array/find');
    var findRight = require('array/find/right');
    var findIn = require('array/find/in');
    var findInRight = require('array/find/in-right');
    var findOwn = require('array/find/own');
    var findOwnRight = require('array/find/own-right');
    var findKey = require('array/find/key');
    var findKeyIn = require('array/find/key/in');
    var findKeyInRight = require('array/find/key/in-right');
    var findKeyOwn = require('array/find/key/own');
    var findKeyOwnRight = require('array/find/key/own-right');
    var findKeyRight = require('array/find/key/right');
    var reduce = require('array/reduce');
    var reduceRight = require('array/reduce/right');
    var filter = require('array/filter');
    var filterRight = require('array/filter/right');
    var filterNegative = require('array/filter/negative');
    var filterNegativeRight = require('array/filter/negative-right');
    var doTry = require('function/do-try');
    var cases = {
        kebab: require('string/case/kebab'),
        camel: require('string/case/camel'),
        lower: require('string/case/lower'),
        snake: require('string/case/snake'),
        upper: require('string/case/upper')
    };
    var returnsHash = require('returns/passed');
    var to = require('to');
    var is = require('is');
    return extend([{
            recreate: recreate,
            to: to,
            merge: merge,
            case: cases,
            is0: require('is/0'),
            is: merge(isStrictlyEqual, is),
            cacheable: require('function/cacheable'),
            categoricallyCacheable: require('function/cacheable/categorically'),
            castBoolean: require('boolean/cast'),
            nonEnumerableProps: require('object/non-enumerable-props'),
            callObjectToString: require('function/object-to-string'),
            eq: require('array/eq'),
            concat: require('array/concat'),
            concatUnique: require('array/concat/unique'),
            flatten: require('array/flatten'),
            flattenDeep: require('array/flatten/deep'),
            flattenSelectively: require('array/flatten/selectively'),
            lastIndex: require('array/index/last'),
            possibleIndex: require('array/index/possible'),
            indexOf: require('array/index/of'),
            indexOfNan: require('array/index/of/nan'),
            indexOfRight: require('array/index/of/right'),
            indexOfNanRight: require('array/index/of/nan-right'),
            sortedIndexOf: require('array/index/of/sorted'),
            smartIndexOf: require('array/index/of/smart'),
            sort: require('array/sort'),
            sortBy: require('array/sort/by'),
            uniqueWith: require('array/unique/with'),
            console: require('console'),
            chunk: require('array/chunk'),
            compact: require('array/compact'),
            contains: require('array/contains'),
            drop: require('array/tail'),
            dropRight: require('array/head'),
            firstIs: require('array/first-is'),
            first: require('array/first'),
            gather: require('array/gather'),
            head: require('array/head'),
            itemIs: require('array/item-is'),
            join: require('array/join'),
            lastIs: require('array/last-is'),
            last: require('array/last'),
            nthIs: require('array/nth-is'),
            nth: require('array/nth'),
            push: require('array/push'),
            results: require('array/results'),
            slice: require('array/slice'),
            split: require('array/split'),
            zip: require('array/zip'),
            toggle: require('boolean/toggle'),
            dateOffset: require('date/offset'),
            date: require('date'),
            now: require('date/now'),
            dateParse: require('date/current-zone/parse'),
            defaultTo1: require('default-to/1'),
            defer: require('function/async/defer'),
            throttle: require('function/async/throttle'),
            bindTo: require('function/bind-to'),
            bindWith: require('function/bind-with'),
            bind: require('function/bind'),
            evaluate: require('function/evaluate'),
            extendConstructor: require('function/extend'),
            factory: require('function/factory'),
            flows: require('function/flows'),
            once: require('function/once'),
            result: require('function/result'),
            reverseParams: require('function/reverse-params'),
            whilst: require('function/whilst'),
            wrapper: require('function/wrapper'),
            wraptry: require('function/wrap-try'),
            objectGenerator: require('generator/keys'),
            arrayGenerator: require('generator'),
            iterateOverPath: require('iterate/over-path'),
            iterateIn: require('iterate/in'),
            iterateOwn: require('iterate/own'),
            couldBeJSON: require('JSON/could-be'),
            cloneJSON: require('JSON/clone'),
            parseJSON: require('JSON/parse'),
            stringifyJSON: require('JSON/stringify'),
            keys: require('object/keys'),
            allKeys: require('object/keys/all'),
            euclideanDistance: require('number/euclidean-distance'),
            euclideanDistanceOrigin: require('number/euclidean-distance/origin'),
            greaterThan0: require('number/greater-than/0'),
            clamp: require('number/clamp'),
            floatToInteger: require('number/float-to-integer'),
            maxInteger: require('number/max-integer'),
            maxSafeInteger: require('number/max-safe-integer'),
            roundFloat: require('number/round-float'),
            safeInteger: require('number/safe-integer'),
            under1: require('number/under1'),
            withinRange: require('number/within-range'),
            mergeWithDeepCustomizer: require('object/merge/with-deep-customizer'),
            mergeWithShallowCustomizer: require('object/merge/with-shallow-customizer'),
            mergeWith: require('object/merge/with'),
            at: require('object/at'),
            clone: require('object/clone'),
            create: require('object/create'),
            extend: require('object/extend'),
            fromPairs: require('object/from-pairs'),
            get: require('object/get'),
            has: require('object/has'),
            intendedApi: require('object/intended-api'),
            intendedIteration: require('object/intended-iteration'),
            intendedObject: require('object/intended'),
            invert: require('object/invert'),
            set: require('object/set'),
            stringify: require('object/stringify'),
            values: require('object/values'),
            passesFirst: require('passes/first'),
            passesSecond: require('passes/second'),
            performance: require('performance'),
            performanceNow: require('performance/now'),
            returns: merge(returns, returnsHash),
            capitalize: require('string/capitalize'),
            stringConcat: require('string/concat'),
            createEscaper: require('string/create-escaper'),
            objectParse: require('string/object-parse'),
            customUnits: require('string/units/custom'),
            deburr: require('string/deburr'),
            deprefix: require('string/deprefix'),
            hasUnicodeWord: require('string/has-unicode-word'),
            escapeMap: require('string/escape-map'),
            escape: require('string/escape'),
            pad: require('string/pad'),
            padEnd: require('string/pad-end'),
            padStart: require('string/pad-start'),
            unescape: require('string/unescape'),
            unescapeMap: require('string/unescape-map'),
            units: require('string/units'),
            uuid: require('string/uuid'),
            words: require('string/words'),
            time: require('time'),
            indent: require('string/indent'),
            parseURL: require('URL/parse'),
            protocol: require('URL/protocol'),
            protocols: require('URL/protocols'),
            reference: require('URL/reference'),
            stringifyQuery: require('URL/stringify-query'),
            matchesBinary: require('object/matches/binary'),
            matchesProperty: require('object/matches/property'),
            matches: require('object/matches'),
            maxVersion: require('string/max-version'),
            baseDataTypes: require('is/base-data-types'),
            negate: require('function/negate'),
            property: require('object/property'),
            noop: require('function/noop'),
            parse: require('object/parse'),
            type: require('string/type'),
            buildMethods: buildMethods
        },
        mapKeys(is, mapKeysPrefix('is')),
        mapKeys(returnsHash, mapKeysPrefix('returns')),
        mapKeys(to, mapKeysPrefix('to')),
        mapKeys(cases, function (value, key) {
            return key + 'Case';
        }),
        buildMethods('forEach', forEach, forEachRight),
        buildMethods('forOwn', forOwn, forOwnRight),
        buildMethods('forIn', forIn, forInRight),
        buildMethods('map', map, mapRight),
        buildMethods('mapValues', mapValues, mapValuesRight),
        buildMethods('mapKeys', mapKeys, mapKeysRight),
        buildMethods(FIND, find, findRight),
        buildMethods(FIND + 'In', findIn, findInRight),
        buildMethods(FIND + 'Own', findOwn, findOwnRight),
        buildMethods(FIND_KEY, findKey, findKeyRight),
        buildMethods(FIND_KEY + 'Own', findKeyOwn, findKeyOwnRight),
        buildMethods(FIND_KEY + 'In', findKeyIn, findKeyInRight),
        buildMethods('reduce', reduce, reduceRight),
        buildMethods('filter', filter, filterRight),
        buildMethods('filterNegative', filterNegative, filterNegativeRight)
    ]);

    function mapKeysPrefix(prefix) {
        return function (value, key) {
            return prefix + capitalize(key);
        };
    }
}