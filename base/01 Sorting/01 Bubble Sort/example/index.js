const bubbleSort = (arr) => {
  // Внешний цикл проходит по всему массиву
  for (let i = 0; i < arr.length; i++) {
    // Внутренний цикл для сравнения соседних элементов
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // Сравниваем текущий элемент с следующим элементом
      if (arr[j] > arr[j + 1]) {
        // Если текущий элемент больше, меняем их местами
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
