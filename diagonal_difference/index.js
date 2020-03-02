function diagonalDifference(arr) {
    let firstSum = 0;
    let secondSum = 0;
    if(arr.length) {
        const size = arr[0].length;
        for (let i = 0; i < size; i++) {
            firstSum += arr[i][i]
            secondSum += arr[i][size - 1 - i];
        }
    }

    return Math.abs(firstSum - secondSum);
}