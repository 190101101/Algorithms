function binarySearch(arr, target, low, high) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      return binarySearch(arr, target, low, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, high);
  }
  return -1;
}

function search(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}

const array = [2, 3, 4, 10, 40];
const target = 10;
const result = search(array, target);
if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found in the array');
}
