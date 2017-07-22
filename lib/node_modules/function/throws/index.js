var E = Error;
module.exports = throws;

function throws(throwing) {
    throw new E(throwing);
}