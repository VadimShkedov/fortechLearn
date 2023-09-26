const text1 = 'text education part 2';
const text2 = 'education department fortech';

const giveDiffSymbols = (str1, str2) => {
    let resultStr = ''
    let maxStr = ''
    let minStr = ''

    if (str1.length > str2.length) {
        maxStr = str1
        minStr = str2
    }
    else {
        maxStr = str2
        minStr = str1
    }

    for (let i = minStr.length; i < maxStr.length; i++) {
        resultStr += maxStr[i]
    }

    return resultStr
}

console.log(giveDiffSymbols(text1, text2));