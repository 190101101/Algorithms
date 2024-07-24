const bubbleSort = (arr) => {
  let cleanedArray = arr
    .toLowerCase()
    .split('')
    .filter((item) => {
      return /[a-z]/.test(item);
    });

  let array = [...new Set(cleanedArray)];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1] > array[j]) continue;
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
    }
  }

  console.log(array);
  return array;
};

const arr = `239482390
48qweertrt
uioiopasQW
IESDLFJHZX
CMNASDKddf
hfghjkjhkj
bvbnvbvbxc
vxczxczzxc
a984239948`;
bubbleSort(arr);
