import { expect } from 'chai';
import { isSymmetric } from '../checkForSymetry.js';

describe('isSymetric', () => {
    
    it('should return true if the array is symetric', () => {
    const input = [1, 2, 1];
    const result = isSymmetric(input);
    
        expect(result).to.be.true;
    });

    it('should return false if the array is not symetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false if the input is not array', () => {
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('1, 2, 3')).to.be.false;
        expect(isSymmetric(-1)).to.be.false;
        expect(isSymmetric(3.14)).to.be.false;
    });

    it('should return false if symmetric numbers are given as arguments', () => {
        expect(isSymmetric(1, 2, 1)).to.be.false;
    });

    it('should return true if an empty array is passed as argument', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true if array with just 1 number is passed as argument', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('should return true if input is an array of strings', () => {
        expect(isSymmetric(['string1', 'string2', 'string1'])).to.be.true;
        expect(isSymmetric([3.14, -1, 3.14])).to.be.true;
        expect(isSymmetric([true, false, true])).to.be.true;
    });

    it('should return false if array input consists of different types', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});