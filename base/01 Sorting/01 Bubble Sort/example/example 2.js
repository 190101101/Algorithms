const bubbleSort = (arr) => {
  let letters = arr.toLowerCase().split('');
  let array = [...new Set(letters)];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j + 1] > array[j]) continue;
      [array[j + 1], array[j]] = [array[j], array[j + 1]];
    }
  }

  console.log(array);
  return array;
};

const arr =
  'qweertrtytyuuyiuioiopasQWIESDLFJHZXCMNASDKddffghfghjkjhkjbvbnvbvbxcvxczxczzxc';
bubbleSort(arr);
