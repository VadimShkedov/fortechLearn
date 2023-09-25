const input = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

const sortAndSet = (array) => {
    let countNums = {};
    let finalArray = [];
    let sortedArray = array.sort((a, b) => a - b);

    for (let elem of sortedArray) {
        if (!countNums[elem]) {
            countNums[elem] = 1;
        }
        else {
            countNums[elem] += 1;
        }
    }
    for (let key in countNums) {
        if (countNums[key] == 1) {
            finalArray.push(parseInt(key));
        }
    }
    return finalArray;
}

console.log(sortAndSet(input));
