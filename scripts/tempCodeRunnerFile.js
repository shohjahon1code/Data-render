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