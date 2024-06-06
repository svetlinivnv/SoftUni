import { expect } from 'chai';
import { isOddOrEven } from '../evenOrOdd.js';

describe ('evenOrOdd', () => {

    it('should return undefined if passed param is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(false)).to.be.undefined;
        expect(isOddOrEven(true)).to.be.undefined;
    });

    it('should return even if the passed string has an even length', () => {
        expect(isOddOrEven('qwer')).to.equal('even');
    });

    it('should return odd if the passed string has an even length', () => {
        expect(isOddOrEven('q')).to.equal('odd');
    });
});