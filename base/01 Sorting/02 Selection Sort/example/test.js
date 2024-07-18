const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[minIndex]) continue;
      minIndex = j;
    }

    if (minIndex === i) continue;
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
};

let arr = [5, 4, 3, 2, 1];
console.log(arr);
selectionSort(arr);
console.log(arr);

//? C:\Users\190101101\Desktop\Algorithms\dev\src\screen
