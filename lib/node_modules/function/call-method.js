module.exports = callMethod;

function callMethod(isStr, method, context, argument) {
    return isStr ? context[method](argument) : method.call(context, argument);
}