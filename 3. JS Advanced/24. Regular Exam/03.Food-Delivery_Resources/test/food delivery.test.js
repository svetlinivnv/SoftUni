import { expect } from "chai";
import foodDelivery from "../food delivery.js";

describe('foodDelivery', () => {
    describe('getCategory', () => {
        // happy paths:
        it('should return proper outputs', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
            expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
            expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
        });

        // invalid paths:
        it('should throw Ivalid category if input string is different than any of the happy path above strings', () => {
            expect(() => foodDelivery.getCategory('asdfadf')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory('')).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory(2)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory([])).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory({})).to.throw('Invalid Category!');
        });

    });

    describe('addMenuItem', () => {
        // happy paths:
        it('should return the number of available items', () => {
            expect(foodDelivery.addMenuItem([{ name: 'Salad', price: 10 }, { name: 'Burger', price: 15 }, { name: 'Pizza', price: 20 }], 15)).to.equal('There are 2 available menu items matching your criteria!');
        });

        // invalid paths:
        it('should throw Invalid Information', () => {
            expect(() => foodDelivery.addMenuItem('not an array', 10)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([], 10)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'Salad', price: 10 }], 'not a number')).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'Salad', price: 10 }], 4)).to.throw('Invalid Information!');
        });
    });

    describe('calculateOrderCost', () => {
        // happy paths:
        it('should calculate the total cost & discount', () => {
            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce', 'beverage'], true)).to.equal('You spend $6.38 for shipping and addons with a 15% discount!');
        });

        it('should calculate the total cost, with no discount', () => {
        expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).to.equal('You spend $8.50 for shipping and addons!');
        });

        // invalid paths:
        it('should throw an error if invalid information is provided', () => {
            expect(() => foodDelivery.calculateOrderCost('', ['sauce'], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], '', true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], ['sauce'], '')).to.throw('Invalid Information!');
        });
    });
});