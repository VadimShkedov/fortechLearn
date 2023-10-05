const object1 = { test: 8, text: 9 };
const object2 = { test: '8', text: 9 };

const checkEqualObjects = (obj1, obj2) => {
  let isObjectsEqual = true;

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      isObjectsEqual = false;
      break;
    }
  }

  return isObjectsEqual;
}

console.log(checkEqualObjects(obj1, obj2));
