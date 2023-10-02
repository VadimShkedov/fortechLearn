const removeDuplicates = (array) => { //возвращает уникальные элементы в массиве task3
  const resultObj = {};

  for (const value of array) {
    const key = (typeof value === 'string') ? value.toLowerCase() : value;
    isNaN(resultObj[key]) ? resultObj[key] = 1 : resultObj[key]++;
  }

  return resultObj;
}

console.log(removeDuplicates([true, 'education', 'part', true]));