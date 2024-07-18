// Функция слияния двух массивов
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Сравниваем элементы левого и правого массивов и объединяем их в результирующий массив
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Переходим к следующему элементу левого массива
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Переходим к следующему элементу правого массива
    }
  }

  // Возвращаем результирующий массив, включая оставшиеся элементы
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Основная функция Merge Sort
function mergeSort(array) {
  // Базовый случай: массив с одним элементом уже отсортирован
  if (array.length <= 1) {
    return array;
  }

  // Разделяем массив на две половины
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Рекурсивно сортируем каждую половину и объединяем их
  return merge(mergeSort(left), mergeSort(right));
}

// Test etmek için örnek dizi
const array = [38, 27, 43, 3, 9, 82, 10];
console.log('Несортированный массив:', array);
const sortedArray = mergeSort(array);
console.log('отсортированный массив:', sortedArray);
