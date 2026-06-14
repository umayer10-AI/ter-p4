const obj = {a : 1, b : 2}

const invertObject = (obj) => {
    const m = {};
    for (let key in obj) {
        m[obj[key]] = key;
    }
    return m; 
}

console.log(invertObject(obj))
