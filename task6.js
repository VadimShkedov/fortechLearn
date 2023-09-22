function func(num) {
    if (num % 2 == 0) {
        return (numSecond) => {
            const resultNum = Math.pow(num, 2) * numSecond
            return (numLast) => {
                const sqrtSumLast = Math.sqrt(resultNum + numLast)
                return Math.trunc(sqrtSumLast * 100) / 100
            }
        }
    }
    else {
        return (numSecond) => {
            const resultNum = Math.pow(num, 3) * numSecond
            return (numLast) => {
                const sqrtSumLast = Math.sqrt(resultNum + numLast)
                return Math.trunc(sqrtSumLast * 100) / 100
            }
        }
    }
}
console.log(func(17)(6)(2))