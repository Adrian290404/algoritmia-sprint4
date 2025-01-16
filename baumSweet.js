function* baumSweet() {
    yield 1; 
    let i = 1;
    while (true) {
        const isOdd = i.toString(2).split('1').some(block => block.length % 2 !== 0);
        yield isOdd ? 0 : 1; 
        i++;
    }
}