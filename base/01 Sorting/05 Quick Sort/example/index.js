// Основная функция Quick Sort
function quickSort(array) {
  // Базовый случай: массив с одним или нулевым количеством элементов уже отсортирован
  if (array.length <= 1) {
    return array;
  }

  // Выбираем опорный элемент (pivot)
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  // Распределяем элементы массива в массивы left и right
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]); // Элементы меньше опорного добавляются в left
    } else {
      right.push(array[i]); // Элементы больше опорного добавляются в right
    }
  }

  // Рекурсивно сортируем подмассивы и объединяем их с опорным элементом
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Test etmek için örnek dizi
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", array);
const sortedArray = quickSort(array);
console.log("Sorted array:", sortedArray);
