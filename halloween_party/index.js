function halloweenParty(k) {
    const dividedInHalf = k / 2;
    if(Number.isInteger(dividedInHalf)) {
        return dividedInHalf * dividedInHalf;
    } else {
        return parseInt(dividedInHalf) * parseInt(dividedInHalf + 1);
    }
}