import { expect } from "chai";
import { lookupChar } from "../charLookup.js";

describe('charLookup', () => {

    it ('has to return undefined if the first param is not a string or the second param is not a number', () => {
        expect(lookupChar('test', [])).to.be.undefined;
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('test', 'test')).to.be.undefined;
        expect(lookupChar([], 2)).to.be.undefined;
        expect(lookupChar('test', 5.5)).to.be.undefined;
    });

    it ('has to return "Incorrect index" if such is passed as a param', () => {
        expect(lookupChar('test', 5)).to.equal('Incorrect index');
        expect(lookupChar('test', -5)).to.equal('Incorrect index');
    });

    it ('has to return the char at a given index', () => {
        expect(lookupChar('test', 2)).to.equal('s');
        expect(lookupChar('home', 0)).to.equal('h');
    });
});