function range(start, stop, step = 1) {
    const finalArray = []

    if (start < stop) {
        for (let i = start; i <= stop; i+=step) {
            finalArray.push(i)
        }
    }
    else {
        for (let i = start; i >= stop; i+=step) {
            finalArray.push(i)
        }
    }
    return finalArray
}

console.log(range(5, 2, -1));