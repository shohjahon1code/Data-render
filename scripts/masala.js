// 1-masala

function sortArray(array) {
  const positive = [];
  const negative = [];

  array.forEach((arr) => {
    if (arr < 0) {
      negative.push(arr);
    } else {
      positive.push(arr);
    }
  });
  const reducedPos = positive.reduce((acc, cur) => acc + cur);
  const reducedNeg = negative.reduce((acc, cur) => acc + cur);

  return [reducedPos, reducedNeg];
}

console.log(sortArray([1, 2, -5, 6, -3, -2, 9]));

// 2-masala
function palendromNum(num) {
  return num.toString().split("").reverse().join("") == num ? true : false;
}

console.log(palendromNum(242));

// 3-masala
function findYear(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log("Bu yil kabisa yili");
  } else {
    console.log("Bu yil kabisa emas");
  }
}

findYear(1200);

// 4-masala
function identifyNegativeNums(array) {
  let arr = [];
  array.forEach((item) => {
    if (item < 0) {
      arr.push(item);
    }
  });
  return arr;
}

console.log(identifyNegativeNums([1, 3, -4, 6, -8, -9, -190]));
