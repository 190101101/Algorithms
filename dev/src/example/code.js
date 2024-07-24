const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
};

const target = 4;
const array = [2, 3, 4, 1, 5];
const result = linearSearch(array, target);
console.log(result);
