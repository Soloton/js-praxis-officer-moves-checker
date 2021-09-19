function isOfficerMove(stringFrom, stringTo) {
  const from = translateCoords(stringFrom);
  const to = translateCoords(stringTo);

  if (isOutOfBoard(from) || isOutOfBoard(to)) {
    return false;
  }

  return abs(from.literal - to.literal)
      === abs(from.number - to.number);
}

function abs(number) {
  if (number < 0) {
    return -number;
  } else {
    return number;
  }
}

function isOutOfBoard(coordinatesObject) {
  return coordinatesObject.literal < 1
      || coordinatesObject.literal > 8
      || coordinatesObject.number < 1
      || coordinatesObject.number > 8;
}

function translateCoords(coordinates) {
  return {
    literal: coordinates.toLowerCase().charCodeAt(0) - 96,
    number: parseInt(coordinates.substr(1)),
  };
}
