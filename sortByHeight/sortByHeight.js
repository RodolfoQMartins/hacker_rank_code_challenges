function sortByHeight(a) {
    const newArray = a.filter(item => item !== -1).sort()

    a.forEach((element, index) => {
        if(element === -1) newArray.splice(index, 0, -1)
    });

    return newArray;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))