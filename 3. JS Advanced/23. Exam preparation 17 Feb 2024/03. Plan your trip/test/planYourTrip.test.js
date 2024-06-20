import { expect } from 'chai';
import planYourTrip from '../planYourTrip.js';

describe('planYourTrip', () => {

    describe('choosingDestination', () => {
        // happy case:
        it('should return Great choice! or Consider visiting during winter for best experience', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(`Great choice! The ${'Winter'} is the perfect time to visit the ${'Ski Resort'}.`);
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the ${'Ski Resort'}.`);
        });

        // throw error scenarios:
        it('should throw Invalid Year', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2025)).to.throw('Invalid Year!');
        });

        it('should throw invalid destination message', () => {
            expect(() => planYourTrip.choosingDestination('Beach', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        });

    });

    describe('exploreOptions', () => {
        // happy case:
        it('should remove the element on the index specified & return comma joined array elements', () => {
            expect(planYourTrip.exploreOptions(['Ski Resort', 'Beach', 'Jungle', 'Chernobyl'], 2)).to.equal('Ski Resort, Beach, Chernobyl');
        });

        // throw error scenarios:
        it('should throw Invalid Information', () => {
            expect(() => planYourTrip.exploreOptions({}, 1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions([], 1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions([], 1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], 'invalid index')).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], [])).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], null)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], undefined)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(44, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Sea'], 1.5)).to.throw('Invalid Information!');
        });
    });

    describe('estimateExpenses', () => {
        // happy case:
        it('should return the result formatted to the second digit after the decimal point', () => {
            expect(planYourTrip.estimateExpenses(5, 100)).to.equal(`The trip is budget-friendly, estimated cost is $${'500.00'}.`);
            expect(planYourTrip.estimateExpenses(2, 1)).to.equal(`The trip is budget-friendly, estimated cost is $${'2.00'}.`);
            expect(planYourTrip.estimateExpenses(5, 101)).to.equal(`The estimated cost for the trip is $${'505.00'}, plan accordingly.`);
        });

        // validate input:
        it('should accept just numbers, otherwise throw Invalid Information!', () => {
            expect(() => planYourTrip.estimateExpenses(null, 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses([], 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses({}, 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(undefined, 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(1, null)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(1, [])).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(1, {})).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(1, undefined)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(1, '')).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses('', 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 100)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(10, 0)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(10, -5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(-10, 5)).to.throw('Invalid Information!');
        });
    });
});