const uppercaseAll = (...theArgs) => {
  const arr = []
  for (const arg of theArgs) {
    arr.push(arg.toUpperCase())
  }
  return arr
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
