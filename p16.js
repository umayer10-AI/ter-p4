const a = {a: 1, b: 2, c: 3}

const countProperties = (obj) => {
    const cnt = Object.keys(obj)
    return cnt.length
}

console.log(countProperties(a))