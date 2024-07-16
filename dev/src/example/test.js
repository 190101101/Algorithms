const selectionSort = (arr) => {
  let n = arr.length;

  for (i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      console.log(`${temp} > ${arr[i]} = ${temp > arr[i]} => ${arr}`);
      arr[minIndex] = temp;
    }
  }
};

let arr = [7, 5, 1, 8, 2];
console.log(`[+] => [${arr}]`);
selectionSort(arr);
console.log(`[+] => [${arr}]`);

//? C:\Users\190101101\Desktop\Algorithms\dev\src\screen
