const objects = [
  { name: 'test', age: 34, country: 'RF' },
  { name: 'test2', age: 12, country: 'RF' },
  { name: 'test1', age: 54, country: 'RF' }
];

const filtringCollection = (array, equalTo, moreThan) => {
  const finalArray = [];

  array.forEach((object) => {
    const tempArray = [];
    
    for (let key in object) {
      tempArray.push(object[key]);
    }

    if (tempArray.includes(equalTo) && tempArray.find(value => value > moreThan)) {
      finalArray.push(object);
    }
  });

  return finalArray;
}

console.log(filtringCollection(objects, 'RF', 18));
