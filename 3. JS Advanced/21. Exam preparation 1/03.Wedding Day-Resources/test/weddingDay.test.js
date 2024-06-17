import { expect } from 'chai';
import weddingDay from '../weddingDay.js';

describe('WeddingDay', () => {
    describe('PickVenue', () => {
        // happy path test
        it('Should meet the requirements', () => {
            const capacity = 150;
            const pricePerGuest = 120;
            expect(weddingDay.pickVenue(capacity, pricePerGuest, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`);
        });

        it('Should have valid input data', () => {
            expect(() => weddingDay.pickVenue(1, 2, '')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(1, 2, undefined)).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(null, 2, 'Sofia')).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue(1, 2, 3)).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue([1], {}, ['sofia'])).to.throw('Invalid Information!');
            expect(() => weddingDay.pickVenue([], { price: 100 }, ['sofia'])).to.throw('Invalid Information!');
        });

        it('Should throw is location is different than Varna', () => {
            expect(() => weddingDay.pickVenue(150, 120, 'Sofia')).to.throw('The location of this venue is not in the correct area!');
        });

        it('Should meet the requirements', () => {
            expect(weddingDay.pickVenue(149, 120, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal('This venue does not meet your requirements!');
        });

    });

    describe('otherSpendings', () => {
        //happy path
        it('Should return spending for each option without discount', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(`You spend ${1200}$ for wedding decoration and photography!`);
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal(`You spend ${1700}$ for wedding decoration and photography!`);
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['video', 'pictures'], false)).to.equal(`You spend ${2900}$ for wedding decoration and photography!`);
        });

        it('Should return spending for each option with discount', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend ${1200 * 0.85}$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(`You spend ${1700 * 0.85}$ for wedding decoration and photography with 15% discount!`);
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['video', 'pictures'], true)).to.equal(`You spend ${2900 * 0.85}$ for wedding decoration and photography with 15% discount!`);
        });

        //error path
        it('Should throw Invalid Information', () => {
            expect(() => weddingDay.otherSpendings(['flowers'], 1, false)).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings({ fabric: 'Fabric drapes and curtains' }, ['video'], false)).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['video', 'pictures'], '1')).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings(undefined, ['video', 'pictures'], '1')).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings(null, ['video', 'pictures'], '1')).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings('', ['video', 'pictures'], '1')).to.throw('Invalid Information');
            expect(() => weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], '', null)).to.throw('Invalid Information');
        });
    });

    describe('tableDistribution', () => {
        //happy path
        it('Should return number of tables and guests on each table', () => {
            expect(weddingDay.tableDistribution(60, 10)).to.equal(`You have ${10} tables with ${6} guests on table.`);
        });

        //unhappy path
        it('Should return number of tables and guests on each table and join tables', () => {
            expect(weddingDay.tableDistribution(50, 10)).to.equal(`There is only ${5} people on every table, you can join some tables.`);
        });

        //error path
        it('Should throw Ivalid information', () => {
            expect(() => weddingDay.tableDistribution([], [])).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(-60, 6)).to.throw('Invalid Information!');
            expect(() => weddingDay.tableDistribution(60, -6)).to.throw('Invalid Information!');
        });
    });
});