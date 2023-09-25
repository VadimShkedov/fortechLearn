const objects = [
    { name: 'test', age: 34, country: 'RF' },
    { name: 'test2', age: 12, country: 'RF' },
    { name: 'test1', age: 54, country: 'RF' }
];

const filtringCollection = (array, equalTo, moreThan) => {
    let finalArray = [];

    array.forEach((object) => {
        const values = []
        for (let key in object) {
            values.push(object[key]);
        }
        
        if (values.includes(equalTo) && values.find(value => value > moreThan)) {
            finalArray.push(object);
        }
    })
    return finalArray;
}

console.log(filtringCollection(objects, 'RF', 18));