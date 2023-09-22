const array1 = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6]
const array2 = [1, 4, 2, 4]
const array3 = [6, 3, 2, 8, 1]

const giveUniqueElements = (mainArray, ...arrs) => { //возвращает уникальные элементы в нескольких массивах
    const settedAnotherArrays = []

    arrs.forEach((value) => settedAnotherArrays.push(new Set(value)))
    let finalArray = []

    mainArray.forEach((valueMainArray) => {
        let countRepeatElements = 0
        for (let anotherArray of settedAnotherArrays) {
            anotherArray.forEach((valueAnotherArray) => {
                if (valueAnotherArray == valueMainArray) {
                    countRepeatElements++
                }
            })
        }
        if (countRepeatElements == settedAnotherArrays.length) {
            finalArray.push(valueMainArray)
        }
    })
    return finalArray
}
console.log(giveUniqueElements(array1, array2, array3));