const arr = [
    { name: 'test', age: 34, country: 'RF' },
    { name: 'test2', age: 12, country: 'RF' },
    { name: 'test1', age: 54, country: 'RF' }
];

function func(arr, equals, biggest) {
    let finalArray = []

    arr.forEach((object) => {
        const values = []
        for (let key in object) {
            values.push(object[key])
        }
        if (values.includes(equals) && values.find(value => value > biggest)) {
            finalArray.push(object)
        }
    })
    return finalArray
}
console.log(func(arr, 'RF', 18));