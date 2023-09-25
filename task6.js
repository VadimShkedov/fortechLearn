const func = (num) => {
  return (numSecond) => {
    const resultNum = (num % 2 === 0) ? (num**2) * numSecond : (num**3) * numSecond;
    return (numLast) => {
      const sqrtSumLast = Math.sqrt(resultNum + numLast);
      return Math.trunc(sqrtSumLast * 100) / 100;
    }
  }
}

console.log(func(17)(6)(2));