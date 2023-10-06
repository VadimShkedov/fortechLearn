const array = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

const sortAndSetArray = (array) => {
  const countNums = {};
  const finalArray = [];

  for (let elem of array) {
    (!countNums[elem]) ? countNums[elem] = 1 : countNums[elem] += 1
  }
  
  for (let key in countNums) {
    if (countNums[key] === 1) {
      finalArray.push(parseInt(key));
    }
  }

  return finalArray.sort((a, b) => a - b);
}

console.log(sortAndSetArray(array));
