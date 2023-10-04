const manipulateWithNums = (num) => {
  const result = (num % 2 === 0) ? (num**2) : (num**3);
  return (secondNumber) => {
    const multiplyNumbers = result * secondNumber;
    return (lastNumber) => {
      const sqrtSumLast = Math.sqrt(multiplyNumbers + lastNumber);
      return Math.trunc(sqrtSumLast * 100) / 100;
    }
  }
}

console.log(manipulateWithNums(17)(6)(2));
