module.exports = bindTo;

function bindTo(func, context) {
    return context ? func.bind(context) : func;
}