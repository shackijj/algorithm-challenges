function powerSum(n, p, x, exclude = []) {
    if (n === 0) {
        return 0;
    }
    let i = n;
    let sum = Math.pow(i, p);
    let comb = 0;

    while(i >= 1) {
        if (sum > x) {
            comb += powerSum(n, p, x, exclude.concat([i]));
        } else if (sum === x) {
            return 1 + comb;
        }
        i--;
        if (exclude.indexOf(i) === -1) {
            sum += Math.pow(i, p);
        }
    }

    return comb + powerSum(n - 1, p, x, exclude);
}

module.exports = powerSum;