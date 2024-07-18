const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) continue;
      minIndex = j;
    }

    if (minIndex === i) continue;
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

let arr = [5, 4, 3, 2, 1];
console.log(arr);
console.log(selectionSort(arr));
