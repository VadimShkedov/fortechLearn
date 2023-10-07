const object1 = { test: 8, text: 9 };
const object2 = { text: 9, test: 8, for: 23 };

const checkEqualObjects = (obj1, obj2) => {
  let isObjectsEqual = true;
  const keysFirstObject = Object.keys(obj1);
  const keysSecondObject = Object.keys(obj2);

  if (keysFirstObject.length !== keysSecondObject.length) {
    return false;
  }

  for (let key of keysFirstObject) {
    if (obj1[key] !== obj2[key]) {
      isObjectsEqual = false;
      break;
    }
  }

  return isObjectsEqual;
}

console.log(checkEqualObjects(object1, object2));
