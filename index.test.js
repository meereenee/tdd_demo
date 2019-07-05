const {add} = require('./index');

describe('add function', () => {

    it('should add two numbers', () => {

        expect(add(4, 5)).toBe(9);

    });


    it('should add arbitrary number of numbers', () => {

        expect(add(4, 5, 6, 7)).toBe(22);

    });


    it('should ignore falsy values', () => {

        expect(add(4, 5, 6, 7, null, undefined, '', NaN)).toBe(22);

    });

    it('should also add strings that can be coerced to numbers', () => {

        expect(add('1', '2', '5')).toBe(8);

    });


});