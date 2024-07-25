// Функция для выполнения бинарного поиска с использованием цикла
function binarySearch(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  while (high >= low) {
    // Находим средний элемент
    let mid = Math.floor((low + high) / 2);

    // Если средний элемент является искомым значением, возвращаем его индекс
    if (arr[mid] === x) {
      return mid;
    }

    // Если средний элемент больше искомого значения, ищем в левой половине
    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      // Иначе ищем в правой половине
      low = mid + 1;
    }
  }

  // Если элемент не найден, возвращаем -1
  return -1;
}

// Örnek kullanım
const array = [2, 3, 4, 10, 40];
const x = 10;
const result = binarySearch(array, x);

if (result !== -1) {
  console.log('Element found at index:', result); // Konsolda elemanın bulunduğu indeksi yazdır
} else {
  console.log('Element not found in the array'); // Konsolda elemanın bulunamadığını yazdır
}
