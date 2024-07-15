const bubbleSort = (p1) => {
  // Внешний цикл проходит по всему массиву
  for (let i = 0; i < p1.length; i++) {
    // Внутренний цикл для сравнения соседних элементов
    for (let j = 0; j < p1.length - 1 - i; j++) {
      // Сравниваем текущий элемент с следующим элементом
      console.log(p1);
      if (p1[j] > p1[j + 1]) {
        // Если текущий элемент больше, меняем их местами
        const temp = p1[j];
        p1[j] = p1[j + 1];
        p1[j + 1] = temp;
      }
    }
  }
};

const p1 = [2, 5, 4, 3];
bubbleSort(p1);
console.log(p1);
