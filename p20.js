const a = [{name:'Ali'},{name:'Sara'},{name:'Ali'}]

const findDuplicateNames = (a) => {
    const f = {};
    const arr = [];

    a.forEach(v => {
        f[v.name] = (f[v.name] || 0) + 1;
    });

    for (const x in f) {
        if (f[x] > 1){
            arr.push(x);
        }
    }
    return arr;
}

console.log(findDuplicateNames(a))