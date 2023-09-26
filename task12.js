const makeArrayPair = (obj) => {
  const pairArray = [];

  for (let key in obj) {
    pairArray.push([key, obj[key]]);
  }

  return pairArray;
}

console.log(makeArrayPair({ 'dog': 6, 'cat': 11 }));
