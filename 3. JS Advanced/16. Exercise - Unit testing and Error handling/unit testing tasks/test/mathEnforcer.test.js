import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe('mathEnforcer', () => {

    describe('addFive', () => {
        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.addFive('asdf')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive(false)).to.be.undefined;
            expect(mathEnforcer.addFive('')).to.be.undefined;
        });

        it('should return correct result with number parameter', () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(2.55)).to.be.closeTo(7.55, 0.01);
            expect(mathEnforcer.addFive(-2.55)).to.be.closeTo(2.45, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return correct result with non-number parameter', () => {
            expect(mathEnforcer.subtractTen('asdf')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen(false)).to.be.undefined;
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
        });

        it('should return correct result with number parameter', () => {
            expect(mathEnforcer.subtractTen(2)).to.equal(-8);
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined with any non-number parameter', () => {
            expect(mathEnforcer.sum('asdf', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, 'asdf')).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum({}, -2)).to.be.undefined;
            expect(mathEnforcer.sum(-2, {})).to.be.undefined;
            expect(mathEnforcer.sum(true, 2)).to.be.undefined;
            expect(mathEnforcer.sum(2, false)).to.be.undefined;
            expect(mathEnforcer.sum('', '')).to.be.undefined;
            expect(mathEnforcer.sum('', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '')).to.be.undefined;
        });

        it('should return correct result - the sum of its two parameters', () => {
            expect(mathEnforcer.sum(2, 2)).to.equal(4);
            expect(mathEnforcer.sum(-2, 2)).to.equal(0);
            expect(mathEnforcer.sum(10, 2.55)).to.be.closeTo(12.55, 0.01);
            expect(mathEnforcer.sum(-2, -2)).to.equal(-4);
            expect(mathEnforcer.sum(2.22, 2.23)).to.be.closeTo(4.45, 0.01);
        });
    });
});