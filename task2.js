const giveUniqueElements = (mainArray, ...arrays) => { //возвращает уникальные элементы в нескольких массивах task2
  const finalArray = [];

  mainArray.forEach((valueMainArray) => {
    let countRepeatElements = 0;

    for (let anotherArray of arrays) {
      anotherArray.forEach((valueAnotherArray) => {
        if (valueAnotherArray === valueMainArray) {
          countRepeatElements++;
        }
      })
    }

    if (countRepeatElements >= arrays.length) {
      finalArray.push(valueMainArray);
    }
  })

  return finalArray;
}