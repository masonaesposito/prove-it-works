const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
    });

    it('should calculate number of payments', () => {
        mortgage = new Mortgage(670000,4.25,15,12);
        const output = mortgage.monthlyPayment()
        expect(output).to.equal('5040.27');
    });
    it('should calculate number of payments', () => {
        mortgage = new Mortgage(420000,3.75,30,12);
        const output = mortgage.monthlyPayment()
        expect(output).to.equal('1945.09');
    });
    it('should calculate number of payments', () => {
        mortgage = new Mortgage(660000,4.25,15,12);
        const output = mortgage.monthlyPayment()
        expect(output).to.equal('4965.04');
    });
    it('should calculate number of payments', () => {
        mortgage = new Mortgage(680000,4.25,15,12);
        const output = mortgage.monthlyPayment()
        expect(output).to.equal('5115.49');
    });
    
    
    
});