describe('BinaryGap', function () {
    it('Example Test - 1024', function () {
        expect(BinaryGapSolution(1041)).toEqual(5);
    });
});

describe('BinaryGap', function () {
    it('Example Test - 9', function () {
        expect(BinaryGapSolution(9)).toEqual(2);
    });
});

describe('BinaryGap', function () {
    it('Extreme Test - 1', function () {
        expect(BinaryGapSolution(1)).toEqual(0);
    });
});

describe('BinaryGap', function () {
    it('Extreme Test - 5', function () {
        expect(BinaryGapSolution(5)).toEqual(1);
    });
});

describe('BinaryGap', function () {
    it('Extreme Test - 2147483647', function () {
        expect(BinaryGapSolution(2147483647)).toEqual(0);
    });
});

describe('BinaryGap', function () {
    it('Trailing Zeros Test - 6', function () {
        expect(BinaryGapSolution(6)).toEqual(0);
    });
});

describe('BinaryGap', function () {
    it('Trailing Zeros Test - 328', function () {
        expect(BinaryGapSolution(328)).toEqual(2);
    });
});


