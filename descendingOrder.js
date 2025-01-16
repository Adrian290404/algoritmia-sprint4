function descendingOrder(n){
    let digits = n.toString().split("");
    let sortedDigits = digits.sort((a, b) => b - a);
    return Number(sortedDigits.join(""));
}