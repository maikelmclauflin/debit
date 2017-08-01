module.exports = removeAt;
var u;

function removeAt(array, index) {
    return index >= 0 ? array.splice(index, 1)[0] : u;
}