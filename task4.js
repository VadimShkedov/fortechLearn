const makeArray = (start, stop, step = 1) => {
    const finalArray = [];

    if (start < stop && step > 0) {
        for (let i = start; i <= stop; i+=step) {
            finalArray.push(i);
        }
    }

    else if (start >= stop && step < 0) {
        for (let i = start; i >= stop; i+=step) {
            finalArray.push(i);
        }
    }

    return finalArray;
}

console.log(makeArray(5, 2, -1));