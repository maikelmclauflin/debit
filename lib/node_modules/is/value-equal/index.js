module.exports = function valueEqual(a, b) {
    return a === b || (a !== a && b !== b);
};