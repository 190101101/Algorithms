const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
};

let arr = [5, 4, 3, 2, 1];
console.log(`[+] => [${arr}]`);
selectionSort(arr);
console.log(`[+] => [${arr}]`);

//? C:\Users\190101101\Desktop\Algorithms\dev\src\screen
