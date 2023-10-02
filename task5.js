const generateCode = (min, max) => Math.trunc(min + Math.random() * (max - min));

const giveUniqueChar = (string) => {
  const listCodes = [];
  let resultChar = '';

  for (let i = 0; i < string.length; i++) {
    listCodes.push(string[i].charCodeAt(0));
  }

  const uniqueListCodes = new Set(listCodes);
  const randomCode = generateCode(32, 126);

  while (resultChar.length === 0) {
    let isExist = false;

    uniqueListCodes.forEach((code) => {
      if (randomCode === code) {
        isExist = true;
        return;
      }
    })

    if (!isExist) {
      resultChar = String.fromCharCode(randomCode);
    }
  }

  return resultChar;
}

const giveFragments = (string) => {
  const finalArray = [];
  const randomSymbol = giveUniqueChar(string);

  for (let i = 0; i < string.length; i += 3) { //by fragments
    const fragment = [];

    for (let j = i; j < i + 3; j++) {
      if (j === i + 1) { //if middle symbol
        fragment.push(randomSymbol);
      }
      else {
        fragment.push(string[j]);
      }
    }
    finalArray.push(fragment.join(''));
  }

  return finalArray.sort();
}