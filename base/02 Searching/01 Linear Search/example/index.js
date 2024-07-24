// Функция для выполнения линейного поиска
function linearSearch(arr, target) {
  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент совпадает с искомым значением, возвращаем индекс
    if (arr[i] === target) return i;
  }
  // Если элемент не найден, возвращаем -1
  return -1;
}

const target = 10;
const array = [2, 3, 4, 10, 40];
const result = linearSearch(array, target);
if (result !== -1) {
  console.log('Element found at index:', result);
} else {
  console.log('Element not found in the array');
}
