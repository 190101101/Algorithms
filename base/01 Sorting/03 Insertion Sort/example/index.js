const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // Вставляемый элемент
    let j = i - 1;

    // Сдвигаем элементы массива arr[0..i-1], которые больше key, на одну позицию вперед
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key; // Вставляем key в правильную позицию
  }
  return arr;
};

let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr);
