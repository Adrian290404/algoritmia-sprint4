function folding(a, b) {
    let count = 0;
    while (b > 0) {
        count += Math.floor(a / b); 
        let remainder = a % b; 
        a = b; 
        b = remainder;
    }
    return count;
}