const powerSum = require('../src/powerSum');

describe('powerSum', () => {
    function checkOutput({params, output}) {
        it(`given that params are ${JSON.stringify(params)}`, () => {
            expect(output).to.equal(powerSum(1, params.n, params.x));
        });
    }
    [
        {
            params: {
                x: 13,
                n: 2
            },
            output: 1
        },
        {
            params: {
                x: 15,
                n: 3
            },
            output: 0
        },
        {
            params: {
                x: 28,
                n: 3
            },
            output: 1
        },
        {
            params: {
                x: 73,
                n: 3
            },
            output: 1
        },
        {
            params: {
                x: 25,
                n: 2,
            },
            output: 2
        },
        {
            params: {
                x: 100,
                n: 2,
            },
            output: 3
        }
    ].forEach(checkOutput);
});