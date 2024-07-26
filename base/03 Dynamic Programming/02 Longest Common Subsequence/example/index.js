function longestCommonSubsequence(a, b) {
  // Создание 2D массива для хранения длины LCS
  const matrix = Array(a.length + 1)
    .fill()
    .map(() => Array(b.length + 1).fill(0));

  // Заполнение матрицы
  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1]; // Если элементы совпадают, увеличиваем значение
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]); // Иначе берем максимум из соседних значений
      }
    }
  }

  return matrix[a.length][b.length]; // Возвращаем длину LCS
}

let a = [2, 3, 4];
let b = [2, 3, 7, 8, 4];

console.log(longestCommonSubsequence(a, b)); // Ожидаемый результат: 3
