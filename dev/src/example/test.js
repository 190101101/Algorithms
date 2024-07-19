const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const array = [38, 27, 43, 3, 9, 82, 10];
console.log(array);
const sortedArray = quickSort(array);
console.log(sortedArray);
