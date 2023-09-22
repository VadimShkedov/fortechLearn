function makeArrayPair(obj) {
    let finalArray = []
    for (let key in obj) {
        finalArray.push([key, obj[key]])
    }
    return finalArray
}
console.log(makeArrayPair({ 'dog': 6, 'cat': 11 }));