const selectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      console.log(arr);
    }
  }

  return arr;
};

let arr = [7, 5, 1, 8, 2];
console.log(arr);
console.log(selectionSort(arr));
