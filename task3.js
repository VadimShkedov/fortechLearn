const removeDuplicates = (array) => {
  const resultArr = [];

  for (const value of array) {
    const neededValue = (typeof value === 'string') ? value.toLowerCase() : value;
    if (!resultArr.includes(neededValue)) {
      resultArr.push(neededValue);
    }
  }
  
  return resultArr;
}

console.log(removeDuplicates(['true', 'education', 'part', 'True']));
