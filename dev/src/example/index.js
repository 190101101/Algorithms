const insertionSort = (arr) => {
  let n = arr.length;
  // Перебор массива, начиная со второго элемента
  for (let i = 1; i < n; i++) {
    let currentValue = arr[i]; // Текущий элемент для вставки
    let j;
    // Сдвигаем элементы массива, которые больше currentValue, на одну позицию вправо
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    // Вставляем currentValue в правильную позицию
    arr[j + 1] = currentValue;
  }
  return arr;
};

// Пример использования
let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr); // Вывод: [1, 2, 3, 4, 5]
