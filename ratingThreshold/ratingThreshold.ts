function ratingThreshold(t:number,ratings:number[][]):number[] {
    const result = [];
    for(let i = 0; i < ratings.length; i ++) {
        const sum = ratings[i].reduce((a,b) => a + b,0);
        const threshold = sum / ratings[i].length;
        if(threshold < t) {
            result.push(i);
        }
    }
    
    return result;
}