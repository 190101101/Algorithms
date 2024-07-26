const quickSort = (array) => {
  if (array.length <= 1) return array

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const array = [38, 27, 43, 3, 9, 82, 10];
console.log('Unsorted array:', array);
const sortedArray = quickSort(array);
console.log('Sorted array:', sortedArray);
