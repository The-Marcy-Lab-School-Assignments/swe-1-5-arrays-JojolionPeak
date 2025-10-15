const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else if (!isFront) {
    arr.push(value);
  };
};

const reverseString = (string) => {
  let strArr = string.split('');
  let reversedArr = strArr.reverse();
  let newStr = reversedArr.join('')
  return newStr;
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = new Array(numOfValue)
  arr.fill(value);
  return arr;
};

const insertIntoMiddle = (arr, value) => {
/*
split - take array length and divide by 2 (round down)
insert - .push into the first arr to go to the back
join -.join the two arrays
*/

};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
