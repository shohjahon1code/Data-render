// 1-masala

function sortArray(array) {
  let positive = 0;
  let negative = 0;

  array.forEach((arr) => {
    if (arr > 0) {
      positive++
    } else {
      negative += arr
    }
  });
  // const reducedPos = positive.reduce((acc, cur) => acc + cur);
  // const reducedNeg = negative.reduce((acc, cur) => acc + cur);

  return [positive, negative];
}

console.log(sortArray([1, 2, -5, 6, -3, -2, 9]));