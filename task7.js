const string1 = 'testset';
const string2 = 'abbcsa';

const isPalindrome = (string) => {
  const length = Math.trunc((string.length - 1) / 2)
  let isPalindr = true

  for (let i = 0; i < length; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      isPalindr = false
      break
    }
  }
  return isPalindr
}

console.log(isPalindrome(string1));

console.log(isPalindrome(string2));