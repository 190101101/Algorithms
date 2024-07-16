const selectionSort = (arr) => {
  let n = arr.length;

  // Проход по всему массиву
  for (let i = 0; i < n; i++) {
    // Инициализируем минимальный индекс текущим значением i
    let minIndex = i;

    // Ищем наименьший элемент в оставшейся части массива
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Меняем местами текущий элемент и наименьший найденный элемент
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

// let arr = [64, 25, 12, 22, 11];
let arr = [7, 5, 1, 8, 2];
console.log(arr);
console.log(selectionSort(arr));
