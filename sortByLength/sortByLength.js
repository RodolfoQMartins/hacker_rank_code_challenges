function sortByLength(a) {
    return a.sort((a, b) => a.length - b.length || a.localeCompare(b))
}