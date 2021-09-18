function isOfficerMove(from, to) {
    let fromLiteral = from.toLowerCase().charCodeAt(0);
    let fromNumber = from[1];

    let toLiteral = to.toLowerCase().charCodeAt(0);
    let toNumber = to[1];

    return abs(fromLiteral - toLiteral) === abs(fromNumber - toNumber);
}

function abs(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}
