function regularName(name: string):string {
    const lowerCaseName = name.substring(1,name.length).toLowerCase();
    const firtLetter = name.substr(0,1).toUpperCase();
    return firtLetter + lowerCaseName
}