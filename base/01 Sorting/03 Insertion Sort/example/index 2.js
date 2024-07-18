const insertionSort = (arr) => {
  // Внешний цикл проходит по всему массиву, начиная со второго элемента
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]; // Текущий элемент для вставки
    let j;

    // Внутренний цикл для сдвига элементов массива
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]; // Сдвигаем элемент вправо
    }

    // Вставляем текущий элемент в правильную позицию
    arr[j + 1] = currentValue;
  }
  return arr;
};

// Пример использования
let arr = [5, 4, 3, 2, 1];
insertionSort(arr);
console.log(arr); // Вывод: [1, 2, 3, 4, 5]
