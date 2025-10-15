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
splice the array
*/
let length = arr.length;
let insert = Math.floor(length / 2)
arr.splice(insert, 0, value);
};

const deleteFromMiddle = (arr) => {
  let length = arr.length
  let remove = Math.floor(length / 2)
  arr.splice(remove, 1)
};

const isRightIndex = (arr, value, index) => {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    if (value === arr[index]) {
      return true;
    } else {
      return false;
    };
  };
};

const roundAllNumsDown = (arr) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.floor(arr[i]))
  };
  return newArr
};

const getAllYCoordinates = (arrOfCoords) => {
  const newArr = []
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1])
  };
  return newArr;
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
