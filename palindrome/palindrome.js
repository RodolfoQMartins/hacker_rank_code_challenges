function palindrome(input) {
    const stringArray = input.split("");
    const repeatedObjects = {}
    let oddCount = 0
    
    for(let property of stringArray) {
        if(repeatedObjects.hasOwnProperty(property)) {
            repeatedObjects[property]++;
        } else {
            repeatedObjects[property] = 1;
        }  
    }

    for(item in repeatedObjects) {
        if(repeatedObjects[item] % 2 !== 0) {
            oddCount++
        }
    }

    return oddCount >= 2 ? false : true;
}