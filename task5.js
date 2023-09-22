const string = 'test education part 2'
const generateCode = (min, max) => Math.trunc(min + Math.random() * (max - min))

function giveUniqueChar(fragment) {
    let listSymbols = []
    for (let i = 0; i < fragment.length; i++) {
        listSymbols.push(fragment[i])
    }
    let randomSymbol = listSymbols[0]

    while (randomSymbol == listSymbols[0] || randomSymbol == listSymbols[2]) {
        const randomCode = generateCode(32, 126)
        randomSymbol = String.fromCharCode(randomCode)
    }
    return randomSymbol
}

function sortObjects(arrObj) {
    for (let i = 0; i < arrObj.length; i++) {
        for (let j = 0; j < arrObj.length - i - 1; j++) {
            if (arrObj[j].sumCode > arrObj[j + 1].sumCode) {
                const tmp = arrObj[j + 1]
                arrObj[j + 1] = arrObj[j]
                arrObj[j] = tmp
            }
        }
    }
    return arrObj
}

function giveFragments(string) {
    let finalArray = []

    for (let i = 0; i < string.length; i += 3) { //by fragments
        let fragment = ''
        let sumCodeSymbols = 0
        for (let j = i; j < i + 3; j++) {
            fragment += string[j]
        }
        let stringArray = fragment.split('')
        stringArray[1] = giveUniqueChar(fragment)

        stringArray.forEach((value) => {
            sumCodeSymbols += value.charCodeAt(0)
        })
        finalArray.push({
            fragment: stringArray.join(''),
            sumCode: sumCodeSymbols
        })

    }
    return sortObjects(finalArray)
}
console.log(giveFragments(string));