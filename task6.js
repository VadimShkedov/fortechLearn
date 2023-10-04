const manipulateWithNums = (num) => {
  return (secondNumber) => {
    const result = (num % 2 === 0) ? (num**2) : (num**3);
    return (lastNumber) => {
      const multiplyNumbers = result * secondNumber
      const sqrtSumLast = Math.sqrt(multiplyNumbers + lastNumber);
      return Math.trunc(sqrtSumLast * 100) / 100;
    }
  }
}

console.log(manipulateWithNums(17)(6)(2));
