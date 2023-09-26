const obj1 = { test: 8, text: 9 };
const obj2 = { test: '8', text: 9 };

const isObjectsEqual = (obj1, obj2) => {
  let isEqual = true;

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      isEqual = false;
    }
  }

  return isEqual;
}

console.log(isObjectsEqual(obj1, obj2));
