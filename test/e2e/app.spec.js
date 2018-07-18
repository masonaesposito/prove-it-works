const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', function () {

    this.timeout(20000)



    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });




    it('should contain a <h1> element for the page title', () => {
        return pageObject
            .evaluate(() => document.querySelector('h1').innerText)
            .then(headerText => {
                expect(headerText).to.not.be.null;
                expect(headerText).to.equal('Mortgage Calculator');
            });

    })

    it('should contain a <input> element for the principal', () => {
        return pageObject
            .evaluate(() => document.querySelector('#principal'))
            .then(inputBox => {
                expect(inputBox).to.exist;

            });
    });

    it('should contain a <input> element for the interest', () => {
        return pageObject
            .evaluate(() => document.querySelector('#interest'))
            .then(inputBox => {
                expect(inputBox).to.exist;

            });
    });

    it('should contain a <input> element for the loan', () => {
        return pageObject
            .evaluate(() => document.querySelector('#loan'))
            .then(inputBox => {
                expect(inputBox).to.exist;

            });
    });
    it('should contain a <select> element for the period', () => {
        return pageObject
            .evaluate(() => document.querySelector('#period'))
            .then(selectBox => {
                expect(selectBox).to.exist;

            });
    });
    it('should contain a <option> element for the select', () => {
        return pageObject
            .evaluate(() => document.querySelector('#option'))
            .then(option => {
                expect(option).to.exist;

            });
    });
    it('should contain a <option> element for the select', () => {
        return pageObject
            .evaluate(() => document.querySelector('#option2'))
            .then(option => {
                expect(option).to.exist;

            });
    });




    it('should correctly calculate mortgage', () =>
        pageObject
            .wait()
            .type('input[name=principal]', 300000)
            .type('input[name=interestRate]', 3.75)
            .type('input[name=loanTerm]', 30)
            .select('select[name=period]', 12)
            .click('button#calculate')
            .wait('#output')
            .evaluate(() => document.querySelector('#output').innerText)
            .then((outputText) => {
                expect(outputText).to.equal('$1389.35');
            })
    ).timeout(6500);

});

