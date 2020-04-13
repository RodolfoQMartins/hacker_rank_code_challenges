function pageNumberingWithInk(current: number, numberOfDigits: number):number {
    while(numberOfDigits >= String(current).length)
    {
        numberOfDigits -= String(current).length;
        if(numberOfDigits >= String(current).length) {
            current++
        }
    }

    return current;
}