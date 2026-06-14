const a = {a:1}
const b = {b:2}
const c = {c:3}

const mergeObjects = (x,y,z) => {
    return Object.assign(x,y,z)
}

console.log(mergeObjects(a,b,c))