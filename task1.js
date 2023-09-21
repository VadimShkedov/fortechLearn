const text1 = 'text education part 2';
const text2 = 'text education';

const diffSymbols = (str1, str2) => {
    let resultStr = ''
    let maxStr = ''
    let needIndex = 0

    if (str1.length > str2.length) {
        maxStr = str1
    }
    else {
        maxStr = str2
    }
    for (let i = 0; i < maxStr.length; i++) {
        if (str1[i] != str2[i]) {
            needIndex = i
            break
        }
    }
    for (let i = needIndex; i < maxStr.length; i++) {
        resultStr += maxStr[i]
    }
    return resultStr
}
console.log(diffSymbols(text1, text2));