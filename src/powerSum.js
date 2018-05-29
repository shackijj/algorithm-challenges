function powerSum(n, p, s) {
    const lastPow = Math.pow(n, p);
    if (lastPow > s) {
        return 0;
    }
    if (lastPow === s) {
        return 1;
    }
    let i = n - 1;
    let sum = lastPow;
    let comb = 0;
    while(i >= 1) {
        sum += Math.pow(i, p);
        if (sum === s) {
            comb++;
            sum -= Math.pow(i, p);
        } else if (sum > s) {
            if (i + 1 < n) {
                sum -= Math.pow(i + 1, p);
            } else {
                sum -= Math.pow(i, p);
            }
        }
        i--;
    }
    return comb + powerSum(n + 1, p, s);
}

module.exports = powerSum;