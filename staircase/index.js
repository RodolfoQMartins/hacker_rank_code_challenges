function staircase(n) {
    let resultArray = [];
    for (let i = 0; i < n; i++) {
        let newArray = [];
        for (let j = 0; j < (n - i - 1); j++) {
            newArray.push(' ')
        }

        for (let z = 0; z < i + 1; z++) {
            newArray.push('#')
        }

        let newString = newArray.join('');
        resultArray.push(newString);
    }

    let result = resultArray.reduce((a, b) => a += '\n' + b);
    return result;
}