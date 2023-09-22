function notExistInSecond(array1, array2) {
    let finalArray = []

    for (let i = 0; i < array1.length; i++) {
        let isExist = false
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                isExist = true
                break
            }
        }
        if (!isExist) {
            finalArray.push(array1[i])
        }
    }
    return finalArray
}
console.log(notExistInSecond([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]));