function powerSum(x, n, m) {
    console.log(x, n, m);
    const max = m || Math.floor(Math.pow(x, 1 / n));
    const maxPow = Math.pow(max, n);

    if (maxPow === 1 && x === 1) {
        console.log('found');
        return 1;
    }
    if (maxPow === 1 && x !== 1) {
        return 0;
    }

    if (maxPow === x) {
        console.log('found');
        return 1 + powerSum(x, n, max - 1);
    }

    if (maxPow < x) {
        return powerSum(x - maxPow, n, max - 1);
    }

    if (maxPow > x) {
        return powerSum(x, n, max - 1);
    }
}

module.exports = powerSum;