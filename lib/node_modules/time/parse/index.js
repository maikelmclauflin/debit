module.exports = datetime;

function datetime(value) {
    return {
        year: value.getYear() + 1900,
        month: value.getMonth() + 1,
        date: value.getDate(),
        hour: value.getHours(),
        minute: value.getMinutes(),
        second: value.getSeconds(),
        ms: value.getMilliseconds(),
        zone: -(value.getTimezoneOffset() / 60)
    };
}