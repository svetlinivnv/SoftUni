import { expect } from 'chai';
import { rgbToHexColor } from "../rgbToHex.js";

describe ('rbg to hex colors converter', () => {
    it ('should return undefined for invalid green values', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(5.5, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined;
    });

    it ('should return undefined for invalid green values', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 5.5, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'a', 0)).to.be.undefined;
    });

    it ('should return undefined for invalid green values', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 5.5)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 'a')).to.be.undefined;
    });

    it('should return correct hex color for valid rgb values', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
        });
});