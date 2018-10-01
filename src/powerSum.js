function calculate(str, pow) {
    let result = 0;
    const len = str.length;
    for(let i = 1; i <= len; i++) {
        if (str[len - i] === '1') {
            result += Math.pow(i, pow);
        }
    }
    return result;
}

function powerSum(x, n) {
    const maxPower = Math.ceil(Math.pow(x, 1 / n));
    let bin = parseInt('1' + '0'.repeat(maxPower - 1), 2);
    let count = 0;
    for(;bin > 0;bin--) {
        if (calculate(bin.toString(2), n) === x) {
            count++;
        }
    }
    return count;
}

module.exports = powerSum;