const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`${temp} > ${arr[j]} = ${temp > arr[j]} => ${arr}`);
      }
    }
  }
};

const arr = [6, 3, 0, 5, 1];
console.log(`[+] => [${arr}]`);
bubbleSort(arr);
console.log(`[+] => [${arr}]`);
