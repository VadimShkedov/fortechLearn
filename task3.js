const removeDuplicates = (arr) => { //возвращает уникальные элементы в массиве
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isExist = false;
    const stringValue = arr[i].toString();

    for (let j = 0; j < resultArr.length; j++) {
      if (resultArr[j] == stringValue.toLowerCase()) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      resultArr.push(stringValue.toLowerCase());
    }
  }
  return resultArr;
}

console.log(removeDuplicates(['text', 'education', 'part', 'Text']));