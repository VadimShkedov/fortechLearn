const string1 = 'testset';
const string2 = 'abbcsa';

const checkWordForPalidrome = (string) => {
  const length = Math.trunc((string.length - 1) / 2);
  let isPalidrome = true;

  for (let i = 0; i < length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      isPalidrome = false;
      break;
    }
  }

  return isPalidrome;
}

console.log(checkWordForPalidrome(string1));

console.log(checkWordForPalidrome(string2));
