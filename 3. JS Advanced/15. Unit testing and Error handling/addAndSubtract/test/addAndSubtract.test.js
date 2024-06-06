import { expect } from 'chai';
import { createCalculator } from '../addAndSubtract.js';

describe('createCalculator', () => {

    let calculator;

    beforeEach(() => calculator = createCalculator());


    it ('should have initial value set to 0', () => {
        expect(calculator.get()).to.equal(0);
    });


    it ('should accept a number or a string containing number', () => {
        calculator.add('5')
        expect(calculator.get()).to.equal(5);
        calculator.add('asdf')
        expect(calculator.get()).to.be.NaN;
    });

    it ('should add a number to the initial value', () => {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
        calculator.add(2);
        expect(calculator.get()).to.equal(7);
        calculator.add(-3);
        expect(calculator.get()).to.equal(4);
    });

    it ('should subtract a number from the initialValue', () => {
        calculator.add(10);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(7);
    });
});