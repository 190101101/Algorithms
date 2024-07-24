const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
};

const target = 3;
const array = [1, 2, 3, 4, 5];
const result = linearSearch(array, target);
console.log(result);
