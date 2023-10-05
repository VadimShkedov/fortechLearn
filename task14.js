const getMaxMinString = (string1, string2) => {
  if (string1.length > string2.length) {

    return {
      maxStr: string1,
      minStr: string2
    }
  }

  return {
    maxStr: string2,
    minStr: string1
  }
}

const searchingSubstring = (string1, string2) => {
  let isStringExist = false;
  
  const { minStr, maxStr } = getMaxMinString(string1, string2);

  for (let i = 0; i < maxStr.length; i++) {
    const sliceStr = maxStr.slice(i, i + minStr.length);
    if (sliceStr === minStr) {
      isStringExist = true;
      break;
    }
  }

  return isStringExist;
}

console.log(searchingSubstring('text education part 2', 'text'));

console.log(searchingSubstring('text education part 2', 'test'));
