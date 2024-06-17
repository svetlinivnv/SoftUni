import { expect } from 'chai';
import lottery from '../Lottery.js'

describe('lottery', () => {

    describe('buyLotteryTicket', () => {
        //happy path
        it('should return bought tickets count and total price', () => {
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(`You bought ${1} tickets for ${1}$.`);
            expect(lottery.buyLotteryTicket(5, 10, true)).to.equal(`You bought ${10} tickets for ${50}$.`);
        });

        //unable to buy
        it('should throw error unable to buy lottery ticket', () => {
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
        });
        
        //invalid input
        it('should throw error Invalid input', () => {
            expect(() => lottery.buyLotteryTicket(1, 1, 1)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(true, 1, 1)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, false, 1)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket([], 1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, 1, [])).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, null, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('', 1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, '', true)).to.throw('Invalid input!');
        });

    });


    describe('checkTicket', () => {
        //happy paths
        it('should return congrats msg or Jackpot msg', () => {
            // 3 equal numbers
            expect(lottery.checkTicket([5, 7, 8, 1, 33, 9], [4, 2, 6, 1, 33, 9])).to.equal('Congratulations you win, check your reward!');
            // 6 equal numbers
            expect(lottery.checkTicket([5, 7, 8, 1, 33, 9], [5, 7, 8, 1, 33, 9])).to.equal('You win the JACKPOT!!!');
        });

        //error paths
        it('should throw an error invalid input', () => {
            expect(() => lottery.checkTicket([5, 7, 8, 1, 33], [4, 2, 6, 1, 33, 9])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket('', [4, 2, 6, 1, 33, 9])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([4, 2, 6, 1, 33, 9], 1)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket('hi', [5, 7, 8, 1, 33, 9])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([5, 7, 8, 1, 33, 9], null)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([5, 8, 1, 33, 9], [5, 7, 8, 1, 33])).to.throw('Invalid input!');
        });

    });

    describe('secondChance', () => {
        //happy paths
        it('should return second chance prize win or ticket did not win', () => {
            expect(lottery.secondChance(1, [11, 12, 5, 4, 6, 8, 10, 1])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(1, [11, 15, 22, 4, 2, 3, 8, 9])).to.equal("Sorry, your ticket didn't win!");
        });

        //error paths
        it('should throw Ivalid input', () => {
            expect(() => lottery.secondChance(null, [11, 12, 5, 4, 6, 8, 10, 1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(undefined, [11, 12, 5, 4, 6, 8, 10, 1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance('', [11, 12, 5, 4, 6, 8, 10, 1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance([], [11, 12, 5, 4, 6, 8, 10, 1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, null)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, undefined)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, '')).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, false)).to.throw('Invalid input!');
            expect(() => lottery.secondChance(false, [11, 1])).to.throw('Invalid input!');
        });

    });

});