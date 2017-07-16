module.exports = match;

function match(string, regexp) {
    return string && string.match(regexp) || [];
}