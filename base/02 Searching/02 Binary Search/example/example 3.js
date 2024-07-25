function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

const array = [2, 3, 4, 10, 40];
const target = 10;
const result = binarySearch(array, target);
if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found in the array');
}
