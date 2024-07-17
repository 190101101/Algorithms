const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);
