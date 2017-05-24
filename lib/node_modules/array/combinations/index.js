module.exports = combinations;

function combinations(list, fn) {
    var j, f, i = 0,
        length = list && list.length;
    while (i < length) {
        j = i + 1;
        f = fn(list[i], i, list);
        while (j < length) {
            f(list[j], j, list);
            j++;
        }
        i++;
    }
}