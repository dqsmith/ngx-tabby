/*jshint esversion: 6 */

const chai = require('chai');
const jsdom = require('mocha-jsdom');

const should = chai.should;
const exist = chai.exist;
const expect = chai.expect;

const TabbyService = require('../lib/index').TabbyService;

describe('TabbyService', () => {
    let tabbyService;

    jsdom();

    beforeEach(() => {
        tabbyService = new TabbyService();

        tabbyService.init();
    });

    it('should get image', () => {
        const image = tabbyService.getImage();

        expect(image).to.exist;
    });

    it('should get image left position', () => {
        const position = tabbyService.getPosition();

        expect(position.left).to.exist;
    });

    it('should get image top position', () => {
        const position = tabbyService.getPosition();

        expect(position.top).to.exist;
    });

    it('should add kitten', () => {
        tabbyService.addKitten();

        const kitten = document.body.getElementsByTagName('img');

        expect(kitten).to.exist;
    });

    it('should use TAB+b to generate kitten', () => {
        const tabEvent = document.createEvent('KeyboardEvent');
        const bEvent = document.createEvent('KeyboardEvent');
        const tab = 9;
        const b = 66;


        tabEvent.initKeyboardEvent('keydown', true, false, null, 0, false, 0, false, tab, 0);
        bEvent.initKeyboardEvent('keydown', true, false, null, 0, false, 0, false, b, 0);

        document.dispatchEvent(tabEvent);
        document.dispatchEvent(bEvent);

        const kitten = document.getElementsByTagName('img');

        expect(kitten).to.exist;
    });
});