(() => {
    'use strict'

    const expect = require('chai').expect;
    const contract = require('../validation-contract.js');

    describe('Fluent Validator', () => {

        describe('"Is Required"', () => {
            it('should return an error when value is invalid', async () => {
                await contract.clear();
                await contract.isRequired('', 'This field is required');
                let errors = await contract.getErrors();
                expect(errors.length).equal(1);
            });

            it('should return no errors when value is valid', async () => {
                await contract.clear();
                await contract.isRequired('Some value', 'This field is required');
                let errors = await contract.getErrors();
                expect(errors.length).equal(0);
            });
        });

        describe('"Has Min Length"', () => {
            it('should return an error when value is invalid', async () => {
                await contract.clear();
                await contract.hasMinLen('', 3, 'This field is required');
                let errors = await contract.getErrors();
                expect(errors.length).equal(1);
            });

            it('should return an error when value is invalid different of empty', async () => {
                await contract.clear();
                await contract.hasMinLen('Some value', 11, 'This field is required and more than 11');
                let errors = await contract.getErrors();
                expect(errors.length).equal(1);
            });
        });

        describe('"Has Max Length"', () => {
            it('should return an error when value is invalid', async () => {
                await contract.clear();
                await contract.hasMaxLen('', 3, 'This field is required');
                let errors = await contract.getErrors();
                expect(errors.length).equal(1);
            });

            it('should return an error when value is invalid different of empty', async () => {
                await contract.clear();
                await contract.hasMaxLen('Some value', 9, 'This field is required and less than 10');
                let errors = await contract.getErrors();
                expect(errors.length).equal(1);
            });
        });
    });
})();
