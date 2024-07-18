const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = i;
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
};

let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);
