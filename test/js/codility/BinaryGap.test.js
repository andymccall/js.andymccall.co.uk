const expect = require('chai').expect;
const BinaryGap = require('../../../src/js/codility/BinaryGap');

describe("this", function() {
    it("should do that", function() {
        expect('yes').to.equal('yes');
    });


    it("should test binary gap", function() {
        expect(BinaryGap.solution(1)).to.equal('00000001');
    });
});