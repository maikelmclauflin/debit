module.exports = insertAt;

function insertAt(array, item, index) {
    array.splice(index || 0, 0, item);
}