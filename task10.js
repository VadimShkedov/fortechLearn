const existInFirst = (array1, array2) => {
  const finalArray = [];

  for (let i = 0; i < array1.length; i++) {
    let isNumExist = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        isNumExist = true;
        break;
      }
    }

    if (!isNumExist) {
      finalArray.push(array1[i]);
    }
  }

  return finalArray;
}

console.log(existInFirst([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]));
