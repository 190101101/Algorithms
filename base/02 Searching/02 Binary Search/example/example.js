function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] > target ? (high = mid - 1) : (low = mid + 1);
  }

  return -1;
}

const target = 10;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const result = binarySearch(array, target);

if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found in the array');
}
