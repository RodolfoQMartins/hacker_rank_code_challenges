function kangaroo(x1, v1, x2, v2) {
    let m1 = x1 + v1;
    let m2 = x2 + v2;
    if (m1 !== m2 && v1 <= v2) {
        return 'NO'
    }

    while (m1 < m2) {
        m1 += v1;
        m2 += v2;
    }
    return m1 === m2 ? 'YES' : 'NO';
}