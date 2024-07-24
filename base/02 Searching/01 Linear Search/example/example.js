const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

const target = 3;
const array = [1, 2, 3, 4, 5];
const result = linearSearch(array, target);
if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found in the array');
}
