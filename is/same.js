module.exports = same;

function same(a, b) {
    return a === a ? b === a : b !== b;
}