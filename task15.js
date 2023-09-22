const a = { test: 8, text: 9 };
const b = { test: 8, text: 9 };


function func(obj1, obj2) {
    let isEqual = true
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            isEqual = false
        }
    }
    return isEqual
}

console.log(func(a, b));