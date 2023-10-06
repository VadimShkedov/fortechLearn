const object1 = { test: 8, text: 9 };
const object2 = { text: 9, test: 8 };

const maxLengthObject = (obj1, obj2) => {
  const keysFirstObject = Object.keys(obj1);
  const keysSecondObject = Object.keys(obj2);

  return (keysFirstObject.length > keysSecondObject.length) ? obj1 : obj2;
}

const checkEqualObjects = (obj1, obj2) => {
  let isObjectsEqual = true;
  const maxObject = maxLengthObject(obj1, obj2)

  for (let key in maxObject) {
    if (obj1[key] !== obj2[key]) {
      isObjectsEqual = false;
      break;
    }
  }

  return isObjectsEqual;
}

console.log(checkEqualObjects(object1, object2));