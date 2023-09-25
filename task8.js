const deleteElements = (arrayElements, arrayIndexes) => {
    const finalArray = [];
    
    for (let index = 0; index < arrayElements.length; index++) {
        if (!arrayIndexes.includes(index)) {
            finalArray.push(arrayElements[index])
        }
    }
    return finalArray;
}

console.log(deleteElements([5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1]));
