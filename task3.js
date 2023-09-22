const removeDuplicates = arr => { //возвращает уникальные элементы в массиве
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        let isExist = false
        for (let j = 0; j < resultArr.length; j++) {
            if (resultArr[j] == arr[i].toLowerCase()) {
                isExist = true
                break
            }
        }
        if (!isExist) {
            resultArr.push(arr[i])
        }
    }
    return resultArr
}
console.log(removeDuplicates(['text', 'education', 'part', 'Text']));