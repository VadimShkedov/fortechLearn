const objects = [
    { name: 'test', age: 34, country: 'RF' },
    { name: 'test2', age: 12, country: 'RF' },
    { name: 'test1', age: 54, country: 'RF' }
];

const filtringCollection = (array, equals, biggest) => {
    let finalArray = [];

    array.forEach((object) => {
        const values = []
        for (let key in object) {
            values.push(object[key]);
        }
        
        if (values.includes(equals) && values.find(value => value > biggest)) {
            finalArray.push(object);
        }
    })
    return finalArray;
}

console.log(filtringCollection(objects, 'RF', 18));