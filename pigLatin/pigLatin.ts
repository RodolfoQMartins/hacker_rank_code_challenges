function pigLatin(str: string): string {    
    const vowels = "aeiou";
    const vowelsArray = vowels.split("");
    
    let resultString = str;
    let strArray = resultString.split("");

    if(vowelsArray.indexOf(strArray[0]) !== -1) {
        return resultString + "way";
    }
  
    let countTime = 0;
    while(vowelsArray.indexOf(strArray[0]) === -1 && countTime <= str.length) {
        resultString = resultString.substring(1, resultString.length);
        resultString = resultString + strArray[0];
        strArray = resultString.split("");
        countTime++;
    }

    return resultString + "ay";
}