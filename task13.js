const multiplyNums = (obj) => {
    for (let key in obj) {
        if (!isNaN(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

console.log(multiplyNums({
    name: 'test',
    age: 25,
    weight: 65,
    height: 165
}));
