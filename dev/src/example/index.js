// Функция для выполнения Counting Sort
function countingSort(arr) {
    // Находим максимальное значение в массиве
    let max = Math.max(...arr);

    // Создаем массив для подсчета с нулями
    let count = new Array(max + 1).fill(0);
    let output = new Array(arr.length).fill(0);

    // Подсчитываем количество каждого элемента в исходном массиве
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Изменяем count[i] так, чтобы count[i] содержал фактическую позицию этого числа в output
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Строим выходной массив
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Копируем отсортированные элементы обратно в оригинальный массив
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}

// Пример использования
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original array:", arr);

countingSort(arr);
console.log("Sorted array:", arr);
