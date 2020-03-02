function plusMinus(arr) {
    let negatives = 0;
    let positives = 0;
    let zeros = 0;
    arr.forEach(element => {
        if (element > 0) {
            positives++
        } else if (element == 0) {
            zeros++
        } else {
            negatives++
        }
    });

    let resultArray = [(positives / arr.length).toFixed(6), (negatives / arr.length).toFixed(6), (zeros / arr.length).toFixed(6)]
    let resultString = resultArray.reduce((a, b) => a += '\n' + b);
    return resultString;
}