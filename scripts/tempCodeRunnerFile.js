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

  return [reducedPos,reducedNeg]
}

console.log(sortArray([1, 2, -5, 6, -3, -2, 9]));