const bubbleSort = (p1) => {
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p1.length - 1 - i; j++) {
      if (p1[j] > p1[j + 1]) {
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
