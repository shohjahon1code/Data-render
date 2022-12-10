// 1-masala

function sortArray(array) {
  let positive = 0;
  let negative = 0;

  array.forEach((arr) => {
    if (arr > 0) {
      positive++;
    } else {
      negative += arr;
    }
  });

  return [positive, negative];
}

console.log(sortArray([1, 2, -5, 6, -3, -2, 9]));

// 2-masala
function palendromNum(num) {
  return num.toString().split("").reverse().join("") == num ? true : false;
}

console.log(palendromNum(279));

// 3-masala
function findYear(num) {
  if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log("Bu yil kabisa yili");
  } else {
    console.log("Bu yil kabisa emas");
  }
}

findYear(12);

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
