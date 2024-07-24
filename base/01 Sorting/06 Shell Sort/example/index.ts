// Функция для выполнения Shell Sort
function shellSort(arr: number[]): void {
  let n = arr.length;

  // Начальный gap (интервал) равен половине длины массива
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Выполняем сортировку вставками для каждого gap
    for (let i = gap; i < n; i++) {
      let temp = arr[i];

      // Сдвиг элементов массива для корректного размещения arr[i]
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }

      // Вставка temp в правильную позицию
      arr[j] = temp;
    }
  }
}

// Пример использования
const arr: number[] = [12, 34, 54, 2, 3];
console.log('Original array:', arr);

shellSort(arr);
console.log('Sorted array:', arr);
