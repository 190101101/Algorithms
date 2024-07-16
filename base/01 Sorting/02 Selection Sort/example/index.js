const selectionSort = (arr) => {
  let n = arr.length;

  // Проход по всему массиву
  for (let i = 0; i < n; i++) {
    // Инициализируем минимальный индекс текущим значением i
    let minIndex = i;

    // Ищем наименьший элемент в оставшейся части массива
    for (let j = i + 1; j < n; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // Меняем местами текущий элемент и наименьший найденный элемент
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      console.log(arr);
    }
  }

  return arr;
};

let arr = [5, 4, 3, 2, 1];
console.log(arr);
console.log(selectionSort(arr));
