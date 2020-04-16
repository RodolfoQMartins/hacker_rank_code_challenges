function stringConstruction(a, b) {
    const aCount = {}

    for (const key of a) {
        aCount[key] = 0
    }

    for (const key of b) {
        if(Object.keys(aCount).includes(key)) {
            aCount[key]++
        }
    }

    return Math.min(...Object.values(aCount));
}

console.log(stringConstruction("zb", "bzzb"))