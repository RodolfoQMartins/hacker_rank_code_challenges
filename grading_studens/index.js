function gradingStudents(grades) {
    let resultArray = [];

    grades.forEach(element => {
        if (element % 5 === 0) {
            return resultArray.push(element);
        } else if (element < 38) {
            return resultArray.push(element);
        }

        let newValue = element;
        let count = 0;
        while (newValue % 5 !== 0) {
            newValue++
            count++;
        }

        if (count < 3) {
            return resultArray.push(newValue);
        } else {
            return resultArray.push(element);
        }

    });
    return resultArray;
}