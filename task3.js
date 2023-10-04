const removeDuplicates = (array) => {
  const resultArr = [];

  for (const value of array) {
    const toLowerValue = (typeof value === 'string') ? value.toLowerCase() : value;
    if (!resultArr.includes(toLowerValue)) {
      resultArr.push(toLowerValue);
    }
  }
  
  return resultArr;
}

console.log(removeDuplicates(['true', 'education', 'part', 'True']));
