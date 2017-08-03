var u;
var Symbol = global.Symbol;
var symbolProto = Symbol ? Symbol.prototype : u;
module.exports = symbolProto ? symbolProto.toString : u;