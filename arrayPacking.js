function arrayPacking(a) {
    return a.reduce((acc, num, index) => acc + (num << (index * 8)) >>> 0, 0);
}