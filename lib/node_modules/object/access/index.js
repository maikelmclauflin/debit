var u;
module.exports = get;

function get(object, key) {
    return object ? object[key] : u;
}